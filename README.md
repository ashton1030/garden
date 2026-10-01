# 수업 노트

학생별 수업 기록과 일정을 관리하는 Sites Worker입니다. 화면은 Worker 코드에 포함되어 있고, 구조화된 학생·회차 데이터는 Cloudflare D1에 저장합니다.

## 보안 구조

- 관리자 접근은 `ADMIN_TOKEN_HASH`와 일치하는 무작위 마스터 코드가 필요합니다.
- 학생마다 독립적인 256비트 전용 코드를 발급합니다. 원문 코드는 발급 화면에 한 번만 표시하고 D1에는 SHA-256 해시만 저장합니다.
- 코드가 URL의 fragment에 있으므로 브라우저에서 API 요청 헤더로만 전송됩니다. 서버는 URL fragment를 받지 않습니다.
- 학생 API는 코드가 가리키는 학생 데이터만 반환하며, 학생 ID로 다른 기록을 조회하는 공개 경로는 없습니다.

## 데이터베이스

`db/schema.ts`가 스키마 정의이고, `drizzle/0000_tutor_records.sql`이 첫 D1 마이그레이션입니다. 학생을 추가하기 전에 배포 시 D1 마이그레이션 적용이 완료되어야 합니다.

## 외부 Cloudflare 계정에 배포

이 프로젝트는 Worker와 D1을 사용합니다. GitHub 저장소에 아래 Actions secrets를 설정하면 `main`에 push할 때 Cloudflare Workers로 배포하고 D1 마이그레이션을 적용합니다. Cloudflare 계정마다 별도 Worker와 빈 D1 데이터베이스가 생기며, Sites에 있는 학생 데이터는 복사되지 않습니다.

필요한 GitHub Actions secrets:

- `CLOUDFLARE_ACCOUNT_ID`: 대상 Cloudflare 계정 ID
- `CLOUDFLARE_API_TOKEN`: 해당 계정의 Worker 및 D1 배포에 필요한 권한만 가진 API token
- `ADMIN_TOKEN_HASH`: 마스터 코드의 SHA-256 해시

[GitHub Actions secrets 설정](https://github.com/ashton1030/garden/settings/secrets/actions)에서 위 값을 저장하세요. 외부 조직이 자체 계정에 배포한다면 해당 조직의 저장소와 Cloudflare 계정에 각각 같은 이름의 secrets를 설정해야 합니다.

마스터 코드와 해시를 로컬에서 한 번 생성합니다.

```sh
node scripts/generate-admin-token.mjs
```

출력된 `ADMIN_TOKEN_HASH`만 GitHub secret으로 저장하고, 원문 `ADMIN_TOKEN`은 비밀리에 보관합니다. 원문 코드는 Worker 주소에 `/master#<ADMIN_TOKEN>`을 붙여 관리 화면을 열 때 사용합니다. 코드를 저장소나 이슈에 올리지 마세요.

세 secrets를 저장한 뒤에는 [Actions](https://github.com/ashton1030/garden/actions)에서 **Deploy to Cloudflare Workers**를 열고 **Run workflow**를 실행하세요. 이후 `main`에 push할 때마다 자동 배포됩니다. 첫 배포 때 Wrangler가 `DB` 바인딩용 D1 데이터베이스를 생성하고, Workflow가 `drizzle/`의 미적용 마이그레이션을 적용합니다. 배포가 완료되면 GitHub Actions 로그에서 Worker URL을 확인할 수 있습니다. Cloudflare의 API token은 저장소 코드에 넣지 말고 GitHub Actions secrets로만 설정하세요.

## 로컬 빌드

```sh
bash scripts/build.sh
node scripts/validate-artifact.mjs
```

화면과 API는 `worker/index.js`에서 수정합니다. 이 Worker는 UI와 API를 같은 origin에서 제공하므로 학생용 API에 별도 CORS 허용을 추가하지 않습니다.

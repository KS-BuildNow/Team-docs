# Security

감사합니다. 보안 문제 또는 취약점을 발견하셨다면 아래 절차를 따라 주세요.

1. 민감한 보안 이슈는 공개 이슈 대신 이메일로 보고하세요: security@your-company.example (또는 내부 보안 채널).
2. 공개 이슈를 열 경우, 민감 정보를 포함하지 마세요.
3. 레포에 비밀(토큰/키/비밀번호)을 커밋하지 마세요. GitHub Secrets를 사용해 CI/배포에 필요한 자격증명을 설정하세요.

권장 설정
- GitHub Branch Protection: `dev`와 `main`에 대해 "Require pull request reviews before merging" 및 "Require status checks to pass before merging" 설정.
- GitHub Secrets: `OPENAI_API_KEY`, `SENTRY_DSN` 등 민감한 값은 Secrets에 저장하세요.

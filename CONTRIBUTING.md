# Contributing / 깃 규칙

감사합니다! 아래는 이 레포에서 따르는 기본 Git 규칙입니다. 팀 내 합의가 필요한 부분은 이 문서를 업데이트하세요.

1) 브랜치 전략
- `main`: 릴리스(배포)용 안정 브랜치 — 최종 완성된 코드만 머지합니다.
- `dev`: 통합 개발 브랜치(권장) — 모든 `feature`/`fix` PR은 먼저 `dev`로 머지하고, 릴리스 준비가 되면 `dev`에서 `main`으로 태그/병합합니다.
- `feature/<short-description>`: 새로운 기능 개발용 (예: `feature/ai-inference`).
- `fix/<issue-number>-<short>`: 버그 수정 (예: `fix/42-nullpointer`).
- `hotfix/<short>`: 긴급 수정 시 사용 (긴급히 `main`으로 바로 머지할 수 있음).

2) 커밋 메시지 규칙
- 권장 형식: Conventional Commits 스타일을 따릅니다.
	- 구조: `<type>(<scope>): <subject>`
	- 예: `feat(ai): add initial inference pipeline`
	- `<type>` 예시: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`.
	- `subject`는 명령형 현재 시제로 간단히 작성합니다.
	- 본문에는 변경 이유와 주요 구현 내용을 적습니다(필요 시).

3) Pull Request (PR) 규칙
- PR 제목은 커밋과 유사하게 명확히 작성합니다. (예: `feat(frontend): add analyze screen`)
- PR 본문에 다음을 포함하세요:
	- 변경 요약
	- 관련 이슈(예: `Fixes #12`) 또는 요구사항
	- 테스트 방법(로컬에서 재현하는 방법)
	- 보안·프라이버시 영향(민감 데이터 포함 여부)
- PR 생성 시 적절한 리뷰어와 라벨(tag)을 지정하세요.
- PR 체크리스트(머지 전 필수):
	- [ ] 빌드/런이 정상 동작 (`npm install`, `npm run dev` 등)
	- [ ] 주요 기능에 대한 단위/위젯/통합 테스트 포함 또는 업데이트
	- [ ] 코드 스타일 및 린트 통과
	- [ ] 민감 정보(토큰/비밀번호 등) 제거 또는 마스킹
	- [ ] 관련 문서/README 업데이트

4) 코드 리뷰 가이드
- 작은 PR(50줄 미만)을 권장합니다. 대규모 변경은 기능 단위로 나누세요.
- 리뷰어는 변경 범위, 의도, 테스트 커버리지를 확인합니다.
- 질문이나 개선 제안은 코멘트로 남기고, 필요 시 작성자가 직접 수정합니다.

5) 병합 정책
- 기본 병합 방식: `Squash and merge` (또는 팀 합의에 따라 `Merge commit`).
- 머지 시 커밋 메시지는 PR 요약을 반영하도록 정리합니다.

6) 이슈 템플릿 & PR 템플릿
- `.github/ISSUE_TEMPLATE/` 및 `.github/PULL_REQUEST_TEMPLATE.md`를 통해 표준화할 수 있습니다.

8) 권장 자동화 및 보호 설정
- 브랜치 보호(Branch protection): `dev`와 `main` 브랜치에 대해 "Require pull request reviews before merging" 및 "Require status checks to pass before merging"를 활성화하세요. CI(위의 GitHub Actions) 통과 및 최소 승인 수(예: 1명)를 요구하는 것이 좋습니다.
- CI 자동화: PR마다 `npm test`, `npm run build`(프론트) 및 `pytest`(백엔드)를 실행하도록 `.github/workflows/ci.yml`를 설정했습니다.
- 의존성 업데이트: Dependabot(또는 Renovate)을 설정해 정기적으로 의존성 업데이트 PR을 생성하세요. (`.github/dependabot.yml` 추가됨)
- 비밀 관리: 토큰/키는 레포에 커밋하지 말고 GitHub Secrets에 저장하세요. CI에서 Secrets를 사용하도록 설정하세요.


7) 개발자 로컬 체크리스트
- 의존성 설치: `npm install` (frontend), `pip install -r requirements.txt` (backend)
- 린트/빌드: `npm run build`, `flake8`/`black` 등
- 테스트: `npm test`, `pytest` 등

문의 또는 추가 규칙 제안은 이 파일을 수정하거나 이슈를 생성하세요.

---

간단한 PR 템플릿을 원하시면 제가 `.github/PULL_REQUEST_TEMPLATE.md`를 생성해 드리겠습니다.

<!-- PULL REQUEST TEMPLATE -->

## 제목
`<type>(<scope>): <short summary>` 예: `feat(frontend): add analyze screen`

## 요약
- 변경 내용 간단 요약:

## 관련 이슈
- Fixes #<issue-number> (필수)

## 변경 유형
- ( ) feat: 새로운 기능
- ( ) fix: 버그 수정
- ( ) docs: 문서 변경
- ( ) chore: 기타(빌드, 패키지 등)

## 변경 상세 및 테스트 방법
- 로컬에서 재현하는 방법(명령어/단계):

## 보안·프라이버시 영향
- 민감 데이터 처리 여부(예: 메시지 로그, 사용자 식별자): 예/아니오
- 민감 정보가 포함될 경우 조치(익명화/마스킹 등):

## 스크린샷(선택)
- UI 변경이 있을 경우 첨부

## 체크리스트
- [ ] Target branch: `dev` (통합 개발 브랜치)
- [ ] 코드 빌드/런 확인 (프론트: `flutter pub get` / 백: 가상환경 + `pip install -r requirements.txt`)
- [ ] 단위/통합/위젯 테스트 포함 또는 기존 테스트 통과
- [ ] 린트/포맷 통과 (`flutter analyze` / `dart analyze` / `flake8` 등)
- [ ] 민감정보(토큰/비밀번호 등) 제거 또는 마스킹
- [ ] 관련 문서(`README.md`, `CONTRIBUTING.md`) 업데이트
- [ ] 리뷰어 지정

---

코멘트/질문이 있으면 PR에 남겨 주세요.
## Summary
짧은 변경 요약을 적어주세요.

## Related Issue
- Fixes #<issue-number> (required)

## Changes
- 무엇을 변경했나요? 간단히 나열하세요.

## Checklist
- [ ] 코드 빌드/컴파일됨
- [ ] 테스트 추가/수정됨
- [ ] 관련 문서 업데이트됨

## Reviewer Notes
추가로 검토자가 확인해야 할 내용이 있다면 적어주세요.

#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -lt 2 ]; then
  echo "Usage: $0 <OWNER> <REPO>"
  echo "Example: $0 my-org first_flutter"
  exit 1
fi

OWNER=$1
REPO=$2

echo "Setting branch protection for ${OWNER}/${REPO}..."

protect_branch() {
  BRANCH=$1
  REQUIRED_APPROVALS=$2
  REQUIRE_CODEOWNERS=$3

  echo "- Protecting branch: $BRANCH (approvals=$REQUIRED_APPROVALS, codeowners=$REQUIRE_CODEOWNERS)"

  gh api --method PUT \
    /repos/${OWNER}/${REPO}/branches/${BRANCH}/protection \
    -F required_status_checks.strict=true \
    -F required_status_checks.contexts='["frontend","backend"]' \
    -F enforce_admins=true \
    -F required_pull_request_reviews.dismiss_stale_reviews=false \
    -F required_pull_request_reviews.required_approving_review_count=${REQUIRED_APPROVALS} \
    -F required_pull_request_reviews.require_code_owner_reviews=${REQUIRE_CODEOWNERS} \
    -F restrictions=''

  echo "  -> Done for $BRANCH"
}

# dev: require 1 approval, no codeowner review required
protect_branch dev 1 false

# main: require 2 approvals, require codeowner reviews
protect_branch main 2 true

echo "Branch protection applied. Note: Ensure CI checks 'frontend' and 'backend' exist (run workflows once)."

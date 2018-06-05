yarn run build
export DISTRIBUTION_ID=E20SV9WUABH6CZ
export BUCKET_NAME=lightning-talk
export AWS_PROFILE=pendleton_macbook_cli

aws s3 sync build/ s3://$BUCKET_NAME --profile $AWS_PROFILE
aws configure set preview.cloudfront true --profile $AWS_PROFILE

git add -A
git commit --allow-empty -m "Deploy Lightning Talk on `date +'%Y-%m-%d %H:%M:%S'`";
git push;

# note that the quotes are necessary otherwise it expands the local path.
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths '/*' --profile $AWS_PROFILE
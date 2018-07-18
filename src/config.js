export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-west-1",
      BUCKET: "fsapprentice.com"
    },
    apiGateway: {
      REGION: "us-west-1",
      URL: "https://rls7qp6du1.execute-api.us-west-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_SQlXxM0Ee",
      APP_CLIENT_ID: "2usa6bl1jiblbob0hjihmja1pb",
      IDENTITY_POOL_ID: "us-west-2:83567fcb-1bf4-4899-8062-ec39e15bb56f"
    }
  };
export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51HEEgJKItQrDL2Z6tNIaI3WHjXhHUkAjaCxYyw21ucd39HngBHFVDC1hpWmWcwH8k1Gc7IugL7UA7m633ptue2gL00MBtHbPvx",
  s3: {
    REGION: "us-east-1",
    BUCKET: "saurabhsalvi-notes-add-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://8a6c3xmekj.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_PDYAbMaGw",
    APP_CLIENT_ID: "7e3ntd12k3sebfbuc3rr56ojhe",
    IDENTITY_POOL_ID: "us-east-1:7c7aab79-360c-47e0-ad47-b050cf0cd633"
  }
};
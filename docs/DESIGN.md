# Design Documentation for Altas

## Proposed Folder Structure

[Link to Tree](<https://tree.nathanfriend.io/?s=(%27opTons!(%27fancy!true~fullPathL~trailingSlashL~rootDotL)~V(%27V%27%40root%2F7app_web5NextJSOcli5IDK%20yetOmobile5React%20NaTveOH5FasTfyO7core3enTTe_*UsE.tsXReG.tsX0s4s8HqBqZq6S430G_9nj6jQ39rjH3*0M_9n26-abusedb26-talos8X*M-Q-console2Q-cloudwatch809rYZYBYZ2H-trpc2H-rest2H-websocket87infrastructure5AWS-CDK%20likely%7D77package_eslint3tsconfig3drizzleorm3prisma3XXX0X*000%27)~vEsion!%271%27)*%20%2007*28M-3%2F04Evice5%2F%20%7B6providE7%5Cn*83**9*driveBauthenTcaTonEerGportHapiL!falseMadaptEO%7D0QloggETtiVsource!X0*Y2s4-ZusE_s3j8G-qS48%01qj_ZYXVTQOMLHGEB987654320*>)

```
@root/
├── apps/
│   ├── web/ (NextJS)
│   ├── cli/ (IDK yet)
│   ├── docs/ (NextJS)
│   ├── mobile/ (React Native)
│   └── api/ (Fastify)
├── core/
│   ├── entities/
│   │   ├── User.ts
│   │   └── Report.ts
│   ├── services/
│   │   ├── apiService/
│   │   ├── authenticationService/
│   │   ├── userService/
│   │   └── providerService/
│   ├── ports/
│   │   ├── driven/
│   │   │   ├── port-provider/
│   │   │   └── port-logger/
│   │   └── driver/
│   │       └── port-api/
│   └── adapters/
│       ├── driven/
│       │   ├── adapter-provider-abusedb/
│       │   ├── adapter-provider-talos/
│       │   ├── adapter-messaging-slack/
│       │   ├── adapter-messaging-smtp/
│       │   ├── adapter-logger-console/
│       │   └── adapter-logger-cloudwatch/
│       └── driver/
│           ├── adapter-service-user/
│           ├── adapter-service-authentication/
│           ├── adapter-service-user/
│           ├── adapter-api-trpc/
│           ├── adapter-api-rest/
│           └── adapter-api-websocket/
├── infrastructure/ (AWS-CDK likely)
└── packages/
    ├── eslint/
    ├── tsconfig/
    ├── drizzleorm/
    └── prisma/
```

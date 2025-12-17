# playwrightFrameworkJS
This is playwright framework which is built using javascript and playwright . This is batch 3 which started in november.

project-root/
│
├── tests/                     # Test specifications
│   ├── login.spec.ts
│   └── dashboard.spec.ts
│
├── pages/                     # Page Object Model (POM) classes
│   ├── LoginPage.ts
│   └── DashboardPage.ts
│
├── utils/                     # Utilities & helper methods
│   ├── testData.ts
│   └── apiHelper.ts
│
├── fixtures/                  # Test data files
│   └── users.json
│
├── playwright.config.ts       # Playwright configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Project dependencies

Loggers Level:

{
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
}
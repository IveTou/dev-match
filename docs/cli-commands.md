npx @nestjs/cli generate module profiles
npx @nestjs/cli generate controller profiles

Controller for routing - What to do
Service for most of business logic - How to do it
DTO (Data Transfer Object) - shape contract for each request; list properties we expect
    - We right it as a class not just interface because classes stick around at runtime. That lets Nest validation feature pipes read class metadata and reject bad payloads
PUT -> updates entire resource
PATH -> partial update
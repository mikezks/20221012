# CliWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.5.

## Generate Workspace w/ Module Federation Micro Frontend

- `npm init @angular@latest -- --create-application false` 
- `cd cli-workspace`
- `ng g app mfe-checkin`
- `npm i @angular-architects/module-federation -D`
- `npx ng g @angular-architects/module-federation:init --project mfe-checkin --port 4202 --type remote`
- `ng g m checkin`
- `ng g c checkin/ticket`

## Configure Micro Frontend and Module Federation

- Add routing for `CheckinModule`
- Add routing for `AppModule` and `<router-outlet>`
- Change Webpack Config
  - Modify `name`
  - Expose `CheckinModule`

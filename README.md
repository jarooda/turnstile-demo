## Run Locally

`npm install`

`npm run dev`

## Testing Locally

For env value refer to this: [https://developers.cloudflare.com/turnstile/troubleshooting/testing/](https://developers.cloudflare.com/turnstile/troubleshooting/testing/)

In `.env` insert value to respective key

```
SITE_KEY_VISIBLE_PASS=
SITE_KEY_VISIBLE_BLOCK=
SITE_KEY_INVISIBLE_PASS=
SITE_KEY_INVISIBLE_BLOCK=
SITE_KEY_FORCE_CHALLENGE=

SECRET_KEY_PASS=
SECRET_KEY_FAIL=
SECRET_KEY_TOKEN_SPENT=
```

## References

- [https://developers.cloudflare.com/turnstile/troubleshooting/client-side-errors/error-codes/#error-code-300-and-600](https://developers.cloudflare.com/turnstile/troubleshooting/client-side-errors/error-codes/#error-code-300-and-600)
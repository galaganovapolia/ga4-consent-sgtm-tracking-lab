## Goal:
This project prepares trustworthy data for later analysis through correct data collection: GA4 e-commerce events via GTM, server-side tagging and Consent Mode v2 with a CMP. Each part is verified and documented with DevTools and Tag Assistant evidence. It is the first step of an end-to-end series; the collected data is analysed in BigQuery in the next project.king with GTM, server-side tagging and Consent Mode v2: correct data collection as the first step of analysis.

## Architecture:

## Evidence:

## What I learned:
There website pages have two error types:
- the first error type related to the missing scripts in the code. Once the scripts were added before main.js (because a library must load before the code that uses it) the errors disappear
- the second error was common for all pages which lacked the zoom gallery section on the web page. Once I added a code which searched for the gallery and omit it if the gallery hadn't been found, the error disappear.

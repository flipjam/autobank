# Web Access Calibration Log

This log records temporary, owner-authorized web-search calibration activity for Autobank setup.

Scope: explicit web-search provider override to `openai` only, `workflow: none`, and owner-authenticated usage for initial measurement only. No API keys were configured in `~/.pi/web-search.json` for this calibration.

| UTC timestamp | provider | authentication class | queries | requested result count | workflow | purpose | status | duration_ms | notes |
|---|---|---|---:|---:|---|---|---|---|
| 2026-07-27T23:17:35Z | openai | Codex subscription auth (no configured `openaiApiKey`) | 1 | 1 | none | Temporary setup calibration smoke test | success | n/a | `web_search` used explicit `provider: "openai"`, `workflow: "none"`; query executed via tool call and succeeded without fallback. |

- `OPENAI_API_KEY` env: absent
- `C:/Users/Administrator/.pi/web-search.json` contains no `openaiApiKey` field
- one explicit successful openai call completed

If successful calls reach 25, all further explicit web-search calls must stop until owner direction.
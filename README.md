# Pharmacy Delivery Operations Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIPharmacyDeliveryOperationsAssistant`
- `AIPharmacyDeliveryOperationsOperations`
- `AIPharmacyDeliveryOperationsAnalytics`
- `AIPharmacyDeliveryOperationsWorkflow`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/pharmacy-delivery-operations-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:5300`

Seeded users:
- `admin@pharmacy-delivery-operations.local / admin123`
- `manager@pharmacy-delivery-operations.local / manager123`
- `analyst@pharmacy-delivery-operations.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/pharmacy-delivery-operations-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:5300 npm run smoke
```

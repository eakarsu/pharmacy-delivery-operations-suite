export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "ai-pharmacy-operations-manager-ai-history-f973tn-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI History source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHistory.js"
    }
  ],
  "ai-pharmacy-operations-manager-cf-agentic-compliance-monitoring-page-1stt69-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the CF Agentic Compliance Monitoring Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CFAgenticComplianceMonitoringPage.js"
    }
  ],
  "ai-pharmacy-operations-manager-claim-denial-predict-1d9xwv-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Claim Denial Predict source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ClaimDenialPredict.js"
    }
  ],
  "ai-pharmacy-operations-manager-claims-9qfsmg-exact-ai": [
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    },
    {
      "name": "diagnosis_code",
      "label": "Diagnosis Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    },
    {
      "name": "insurance_provider",
      "label": "Insurance Provider",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    },
    {
      "name": "medication",
      "label": "Medication",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    },
    {
      "name": "ndc_code",
      "label": "Ndc Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    },
    {
      "name": "patient_name",
      "label": "Patient Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    },
    {
      "name": "policy_number",
      "label": "Policy Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    },
    {
      "name": "quantity",
      "label": "Quantity",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "submitted",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    }
  ],
  "ai-pharmacy-operations-manager-gap-claims-without-claim-page-1lr5fm-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Claims Without Claim Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapClaimsWithoutClaimPage.js"
    }
  ],
  "ai-pharmacy-operations-manager-interaction-check-ai-8u4zxh-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Interaction Check AI source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/InteractionCheckAI.js"
    }
  ],
  "ai-pharmacy-operations-manager-ai-advanced-98178q-exact-ai": [
    {
      "name": "allergies = []",
      "label": "Allergies = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "claim_id",
      "label": "Claim Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "conditions = []",
      "label": "Conditions = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "medications",
      "label": "Medications",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "medications = []",
      "label": "Medications = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "patient_id",
      "label": "Patient Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    }
  ],
  "ai-pharmacy-operations-manager-claims-163xrf-exact-ai": [
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/claims.js"
    },
    {
      "name": "diagnosis_code",
      "label": "Diagnosis Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/claims.js"
    },
    {
      "name": "insurance_provider",
      "label": "Insurance Provider",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/claims.js"
    },
    {
      "name": "medication",
      "label": "Medication",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/claims.js"
    },
    {
      "name": "ndc_code",
      "label": "Ndc Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/claims.js"
    },
    {
      "name": "patient_name",
      "label": "Patient Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/claims.js"
    },
    {
      "name": "policy_number",
      "label": "Policy Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/claims.js"
    },
    {
      "name": "quantity",
      "label": "Quantity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/claims.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/claims.js"
    }
  ],
  "ai-pharmacy-operations-manager-custom-feat01-agentic-compliance-monitoring-hz6s2t-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Custom Feat01 Agentic Compliance Monitoring source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/customFeat01_AgenticComplianceMonitoring.js"
    }
  ],
  "ai-pharmacy-operations-manager-gap-feat-claims-without-claim-139kfy-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Feat Claims Without Claim source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gapFeat_claims_without_claim.js"
    }
  ],
  "ai-pharmacy-operations-manager-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI History source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHistory.js"
    },
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    },
    {
      "name": "diagnosis_code",
      "label": "Diagnosis Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    },
    {
      "name": "insurance_provider",
      "label": "Insurance Provider",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    },
    {
      "name": "medication",
      "label": "Medication",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    },
    {
      "name": "ndc_code",
      "label": "Ndc Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    },
    {
      "name": "patient_name",
      "label": "Patient Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    },
    {
      "name": "policy_number",
      "label": "Policy Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    },
    {
      "name": "quantity",
      "label": "Quantity",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "submitted",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    },
    {
      "name": "allergies = []",
      "label": "Allergies = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "claim_id",
      "label": "Claim Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "conditions = []",
      "label": "Conditions = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "medications",
      "label": "Medications",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "medications = []",
      "label": "Medications = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "patient_id",
      "label": "Patient Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    }
  ],
  "ai-pharmacy-operations-manager-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI History source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHistory.js"
    },
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    },
    {
      "name": "diagnosis_code",
      "label": "Diagnosis Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    },
    {
      "name": "insurance_provider",
      "label": "Insurance Provider",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    },
    {
      "name": "medication",
      "label": "Medication",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    },
    {
      "name": "ndc_code",
      "label": "Ndc Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    },
    {
      "name": "patient_name",
      "label": "Patient Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    },
    {
      "name": "policy_number",
      "label": "Policy Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    },
    {
      "name": "quantity",
      "label": "Quantity",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "submitted",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Claims.js"
    },
    {
      "name": "allergies = []",
      "label": "Allergies = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "claim_id",
      "label": "Claim Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "conditions = []",
      "label": "Conditions = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "medications",
      "label": "Medications",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "medications = []",
      "label": "Medications = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    },
    {
      "name": "patient_id",
      "label": "Patient Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAdvanced.js"
    }
  ],
  "ai-pharma-trial-designer-ai-adaptive-sim-page-1fkvmj-exact-ai": [
    {
      "name": "design_family",
      "label": "Design Family",
      "type": "text",
      "defaultValue": "Group-sequential (O\\",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdaptiveSimPage.js"
    },
    {
      "name": "indication",
      "label": "Design Family",
      "type": "text",
      "defaultValue": "NSCLC",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdaptiveSimPage.js"
    },
    {
      "name": "interim_fractions",
      "label": "Phase",
      "type": "text",
      "defaultValue": "0.5, 0.75",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdaptiveSimPage.js"
    },
    {
      "name": "phase",
      "label": "Design Family",
      "type": "text",
      "defaultValue": "III",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdaptiveSimPage.js"
    },
    {
      "name": "planned_n",
      "label": "Indication",
      "type": "number",
      "defaultValue": "600",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdaptiveSimPage.js"
    },
    {
      "name": "primary_endpoint",
      "label": "Design Family",
      "type": "text",
      "defaultValue": "Overall survival",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdaptiveSimPage.js"
    }
  ],
  "ai-pharma-trial-designer-ai-budget-burn-page-11bagy-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Budget Burn Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBudgetBurnPage.js"
    }
  ],
  "ai-pharma-trial-designer-ai-deviation-classifier-page-wxs0m-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Deviation Classifier Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDeviationClassifierPage.js"
    }
  ],
  "ai-pharma-trial-designer-ai-draft-protocol-page-2u2u0p-exact-ai": [
    {
      "name": "compound",
      "label": "Indication",
      "type": "text",
      "defaultValue": "Pembrolizumab (MK-3475) + Pemetrexed",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDraftProtocolPage.js"
    },
    {
      "name": "indication",
      "label": "Indication",
      "type": "text",
      "defaultValue": "Non-Small Cell Lung Cancer",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDraftProtocolPage.js"
    },
    {
      "name": "phase",
      "label": "Indication",
      "type": "select",
      "defaultValue": "III",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDraftProtocolPage.js"
    },
    {
      "name": "population",
      "label": "Phase",
      "type": "textarea",
      "defaultValue": "Adults with confirmed stage IV NSCLC, PD-L1 TPS >= 1%, ECOG 0-1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDraftProtocolPage.js"
    },
    {
      "name": "sample_size",
      "label": "Investigational Compound",
      "type": "number",
      "defaultValue": "600",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDraftProtocolPage.js"
    }
  ],
  "ai-pharma-trial-designer-ai-dropout-predictor-page-upodkd-exact-ai": [
    {
      "name": "duration_weeks",
      "label": "Indication",
      "type": "number",
      "defaultValue": "52",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDropoutPredictorPage.js"
    },
    {
      "name": "indication",
      "label": "Indication",
      "type": "text",
      "defaultValue": "Major Depressive Disorder",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDropoutPredictorPage.js"
    },
    {
      "name": "phase",
      "label": "Indication",
      "type": "text",
      "defaultValue": "III",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDropoutPredictorPage.js"
    },
    {
      "name": "placebo_arm",
      "label": "Duration (weeks)",
      "type": "checkbox",
      "defaultValue": "true",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDropoutPredictorPage.js"
    },
    {
      "name": "population",
      "label": "Phase",
      "type": "text",
      "defaultValue": "Adults with DSM-5 MDD",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDropoutPredictorPage.js"
    },
    {
      "name": "visit_frequency",
      "label": "Indication",
      "type": "text",
      "defaultValue": "every 4 weeks",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDropoutPredictorPage.js"
    }
  ],
  "ai-pharma-trial-designer-ai-dsmb-alert-page-asx4nw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Dsmb Alert Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDsmbAlertPage.js"
    }
  ],
  "ai-pharma-trial-designer-ai-edc-anomaly-page-xrp5ch-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Edc Anomaly Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEdcAnomalyPage.js"
    }
  ],
  "ai-pharma-trial-designer-ai-expected-vs-actual-page-19zhla-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Expected Vs Actual Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIExpectedVsActualPage.js"
    }
  ],
  "ai-pharma-trial-designer-ai-generate-brief-page-1totxt-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Generate Brief Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIGenerateBriefPage.js"
    }
  ],
  "ai-pharma-trial-designer-ai-ie-optimizer-page-1p4wqo-exact-ai": [
    {
      "name": "current_exclusion",
      "label": "Phase",
      "type": "textarea",
      "defaultValue": "Active brain metastases, ILD history, autoimmune disease on systemic steroids",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIeOptimizerPage.js"
    },
    {
      "name": "current_inclusion",
      "label": "Indication",
      "type": "textarea",
      "defaultValue": "Adults >= 18, ECOG 0-1, PD-L1 TPS >= 1%, no prior systemic therapy",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIeOptimizerPage.js"
    },
    {
      "name": "enrollment_target",
      "label": "Current Inclusion Criteria",
      "type": "number",
      "defaultValue": "600",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIeOptimizerPage.js"
    },
    {
      "name": "indication",
      "label": "Indication",
      "type": "text",
      "defaultValue": "Non-Small Cell Lung Cancer",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIeOptimizerPage.js"
    },
    {
      "name": "phase",
      "label": "Indication",
      "type": "text",
      "defaultValue": "III",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIeOptimizerPage.js"
    },
    {
      "name": "screen_fail_rate_pct",
      "label": "Current Exclusion Criteria",
      "type": "number",
      "defaultValue": "45",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIeOptimizerPage.js"
    }
  ],
  "ai-pharma-trial-designer-ai-ind-nda-section-page-ouxatn-exact-ai": [
    {
      "name": "compound",
      "label": "Section",
      "type": "text",
      "defaultValue": "Pembrolizumab (MK-3475)",
      "placeholder": "",
      "options": [
        "Module 2.5 Clinical Overview",
        "Module 2.7 Clinical Summary",
        "Module 5 Clinical Study Reports",
        "Investigator\\",
        ",\n  ",
        "s Brochure — Clinical Experience",
        "IND Form FDA-1571 cover letter"
      ],
      "required": false,
      "source": "frontend/src/pages/AIIndNdaSectionPage.js"
    },
    {
      "name": "indication",
      "label": "Section",
      "type": "text",
      "defaultValue": "Non-Small Cell Lung Cancer",
      "placeholder": "",
      "options": [
        "Module 2.5 Clinical Overview",
        "Module 2.7 Clinical Summary",
        "Module 5 Clinical Study Reports",
        "Investigator\\",
        ",\n  ",
        "s Brochure — Clinical Experience",
        "IND Form FDA-1571 cover letter"
      ],
      "required": false,
      "source": "frontend/src/pages/AIIndNdaSectionPage.js"
    },
    {
      "name": "program_stage",
      "label": "Indication",
      "type": "text",
      "defaultValue": "Phase 3 readout",
      "placeholder": "",
      "options": [
        "Module 2.5 Clinical Overview",
        "Module 2.7 Clinical Summary",
        "Module 5 Clinical Study Reports",
        "Investigator\\",
        ",\n  ",
        "s Brochure — Clinical Experience",
        "IND Form FDA-1571 cover letter"
      ],
      "required": false,
      "source": "frontend/src/pages/AIIndNdaSectionPage.js"
    },
    {
      "name": "section",
      "label": "Section",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Module 2.5 Clinical Overview",
        "Module 2.7 Clinical Summary",
        "Module 5 Clinical Study Reports",
        "Investigator\\",
        ",\n  ",
        "s Brochure — Clinical Experience",
        "IND Form FDA-1571 cover letter"
      ],
      "required": false,
      "source": "frontend/src/pages/AIIndNdaSectionPage.js"
    }
  ],
  "ai-pharma-trial-designer-ai-irb-pkg-drafter-page-x47qyl-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Irb Pkg Drafter Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIrbPkgDrafterPage.js"
    }
  ],
  "ai-pharma-trial-designer-ai-milestone-forecaster-page-xr62vc-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Milestone Forecaster Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMilestoneForecasterPage.js"
    }
  ],
  "ai-pharma-trial-designer-ai-model-risk-page-r0435y-exact-ai": [
    {
      "name": "enrollment_lag_days",
      "label": "Enrollment Lag Days",
      "type": "text",
      "defaultValue": "30",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIModelRiskPage.js"
    },
    {
      "name": "protocol_deviations",
      "label": "Protocol Deviations",
      "type": "text",
      "defaultValue": "4",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIModelRiskPage.js"
    }
  ],
  "ai-pharma-trial-designer-ai-patient-burden-page-13m5f7-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Patient Burden Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPatientBurdenPage.js"
    }
  ],
  "ai-pharma-trial-designer-ai-power-calc-explain-page-1skhqn-exact-ai": [
    {
      "name": "alpha",
      "label": "Alpha (two-sided)",
      "type": "number",
      "defaultValue": "0.05",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPowerCalcExplainPage.js"
    },
    {
      "name": "dropout_rate",
      "label": "Pooled SD",
      "type": "number",
      "defaultValue": "0.15",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPowerCalcExplainPage.js"
    },
    {
      "name": "mde",
      "label": "Power (1 - beta)",
      "type": "number",
      "defaultValue": "0.5",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPowerCalcExplainPage.js"
    },
    {
      "name": "power",
      "label": "Alpha (two-sided)",
      "type": "number",
      "defaultValue": "0.9",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPowerCalcExplainPage.js"
    },
    {
      "name": "sd",
      "label": "Alpha (two-sided)",
      "type": "number",
      "defaultValue": "1.0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPowerCalcExplainPage.js"
    },
    {
      "name": "two_sided",
      "label": "MDE (minimum detectable effect)",
      "type": "checkbox",
      "defaultValue": "true",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPowerCalcExplainPage.js"
    }
  ],
  "ai-pharma-trial-designer-ai-query-resolver-page-11rjnr-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Query Resolver Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIQueryResolverPage.js"
    }
  ],
  "ai-pharma-trial-designer-ai-recommend-endpoints-page-j9gmku-exact-ai": [
    {
      "name": "indication",
      "label": "Indication",
      "type": "text",
      "defaultValue": "Major Depressive Disorder",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRecommendEndpointsPage.js"
    },
    {
      "name": "mechanism",
      "label": "Indication",
      "type": "text",
      "defaultValue": "NMDA receptor antagonist (S-enantiomer of ketamine)",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRecommendEndpointsPage.js"
    },
    {
      "name": "phase",
      "label": "Indication",
      "type": "select",
      "defaultValue": "II",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRecommendEndpointsPage.js"
    }
  ],
  "ai-pharma-trial-designer-ai-regulatory-impact-page-1bnxwo-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Regulatory Impact Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRegulatoryImpactPage.js"
    }
  ],
  "ai-pharma-trial-designer-ai-rwe-match-page-8ldrkp-exact-ai": [
    {
      "name": "indication",
      "label": "Indication",
      "type": "text",
      "defaultValue": "Relapsed/Refractory Acute Myeloid Leukemia",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRweMatchPage.js"
    },
    {
      "name": "proposed_use",
      "label": "Target Outcome",
      "type": "text",
      "defaultValue": "External control arm for single-arm Phase 1b expansion",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRweMatchPage.js"
    },
    {
      "name": "target_outcome",
      "label": "Indication",
      "type": "text",
      "defaultValue": "Overall survival",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRweMatchPage.js"
    },
    {
      "name": "target_population",
      "label": "Indication",
      "type": "textarea",
      "defaultValue": "Adults >= 18, ineligible for intensive chemotherapy",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRweMatchPage.js"
    }
  ],
  "ai-pharma-trial-designer-ai-select-sites-page-19rdj9-exact-ai": [
    {
      "name": "indication",
      "label": "Indication",
      "type": "text",
      "defaultValue": "HR+/HER2- Metastatic Breast Cancer",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISelectSitesPage.js"
    },
    {
      "name": "phase",
      "label": "Indication",
      "type": "select",
      "defaultValue": "III",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISelectSitesPage.js"
    },
    {
      "name": "target_enrollment",
      "label": "Indication",
      "type": "number",
      "defaultValue": "400",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISelectSitesPage.js"
    }
  ],
  "ai-pharma-trial-designer-ai-size-cohort-page-139i2d-exact-ai": [
    {
      "name": "allocation_ratio",
      "label": "Power",
      "type": "text",
      "defaultValue": "1:1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISizeCohortPage.js"
    },
    {
      "name": "alpha",
      "label": "Primary Endpoint",
      "type": "number",
      "defaultValue": "0.05",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISizeCohortPage.js"
    },
    {
      "name": "dropout_rate",
      "label": "Effect Size",
      "type": "number",
      "defaultValue": "0.15",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISizeCohortPage.js"
    },
    {
      "name": "effect_size",
      "label": "Primary Endpoint",
      "type": "text",
      "defaultValue": "0.4% absolute reduction vs control",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISizeCohortPage.js"
    },
    {
      "name": "power",
      "label": "Primary Endpoint",
      "type": "number",
      "defaultValue": "0.9",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISizeCohortPage.js"
    },
    {
      "name": "primary_endpoint",
      "label": "Primary Endpoint",
      "type": "text",
      "defaultValue": "Change from baseline in HbA1c at Week 52",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISizeCohortPage.js"
    }
  ],
  "ai-pharma-trial-designer-ai-statistical-imbalance-page-1n1vxm-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Statistical Imbalance Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIStatisticalImbalancePage.js"
    }
  ],
  "ai-pharma-trial-designer-ai-5cuwes-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-pharma-trial-designer-source-workflow": [
    {
      "name": "design_family",
      "label": "Design Family",
      "type": "text",
      "defaultValue": "Group-sequential (O\\",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdaptiveSimPage.js"
    },
    {
      "name": "indication",
      "label": "Design Family",
      "type": "text",
      "defaultValue": "NSCLC",
      "placeholder": "",
      "options": [
        "Module 2.5 Clinical Overview",
        "Module 2.7 Clinical Summary",
        "Module 5 Clinical Study Reports",
        "Investigator\\",
        ",\n  ",
        "s Brochure — Clinical Experience",
        "IND Form FDA-1571 cover letter"
      ],
      "required": false,
      "source": "frontend/src/pages/AIAdaptiveSimPage.js"
    },
    {
      "name": "interim_fractions",
      "label": "Phase",
      "type": "text",
      "defaultValue": "0.5, 0.75",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdaptiveSimPage.js"
    },
    {
      "name": "phase",
      "label": "Design Family",
      "type": "select",
      "defaultValue": "III",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdaptiveSimPage.js"
    },
    {
      "name": "planned_n",
      "label": "Indication",
      "type": "number",
      "defaultValue": "600",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdaptiveSimPage.js"
    },
    {
      "name": "primary_endpoint",
      "label": "Design Family",
      "type": "text",
      "defaultValue": "Overall survival",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdaptiveSimPage.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Budget Burn Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBudgetBurnPage.js"
    },
    {
      "name": "compound",
      "label": "Indication",
      "type": "text",
      "defaultValue": "Pembrolizumab (MK-3475) + Pemetrexed",
      "placeholder": "",
      "options": [
        "Module 2.5 Clinical Overview",
        "Module 2.7 Clinical Summary",
        "Module 5 Clinical Study Reports",
        "Investigator\\",
        ",\n  ",
        "s Brochure — Clinical Experience",
        "IND Form FDA-1571 cover letter"
      ],
      "required": false,
      "source": "frontend/src/pages/AIDraftProtocolPage.js"
    },
    {
      "name": "population",
      "label": "Phase",
      "type": "textarea",
      "defaultValue": "Adults with confirmed stage IV NSCLC, PD-L1 TPS >= 1%, ECOG 0-1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDraftProtocolPage.js"
    },
    {
      "name": "sample_size",
      "label": "Investigational Compound",
      "type": "number",
      "defaultValue": "600",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDraftProtocolPage.js"
    },
    {
      "name": "duration_weeks",
      "label": "Indication",
      "type": "number",
      "defaultValue": "52",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDropoutPredictorPage.js"
    },
    {
      "name": "placebo_arm",
      "label": "Duration (weeks)",
      "type": "checkbox",
      "defaultValue": "true",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDropoutPredictorPage.js"
    },
    {
      "name": "visit_frequency",
      "label": "Indication",
      "type": "text",
      "defaultValue": "every 4 weeks",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDropoutPredictorPage.js"
    },
    {
      "name": "current_exclusion",
      "label": "Phase",
      "type": "textarea",
      "defaultValue": "Active brain metastases, ILD history, autoimmune disease on systemic steroids",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIeOptimizerPage.js"
    },
    {
      "name": "current_inclusion",
      "label": "Indication",
      "type": "textarea",
      "defaultValue": "Adults >= 18, ECOG 0-1, PD-L1 TPS >= 1%, no prior systemic therapy",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIeOptimizerPage.js"
    },
    {
      "name": "enrollment_target",
      "label": "Current Inclusion Criteria",
      "type": "number",
      "defaultValue": "600",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIeOptimizerPage.js"
    },
    {
      "name": "screen_fail_rate_pct",
      "label": "Current Exclusion Criteria",
      "type": "number",
      "defaultValue": "45",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIeOptimizerPage.js"
    },
    {
      "name": "program_stage",
      "label": "Indication",
      "type": "text",
      "defaultValue": "Phase 3 readout",
      "placeholder": "",
      "options": [
        "Module 2.5 Clinical Overview",
        "Module 2.7 Clinical Summary",
        "Module 5 Clinical Study Reports",
        "Investigator\\",
        ",\n  ",
        "s Brochure — Clinical Experience",
        "IND Form FDA-1571 cover letter"
      ],
      "required": false,
      "source": "frontend/src/pages/AIIndNdaSectionPage.js"
    },
    {
      "name": "section",
      "label": "Section",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Module 2.5 Clinical Overview",
        "Module 2.7 Clinical Summary",
        "Module 5 Clinical Study Reports",
        "Investigator\\",
        ",\n  ",
        "s Brochure — Clinical Experience",
        "IND Form FDA-1571 cover letter"
      ],
      "required": false,
      "source": "frontend/src/pages/AIIndNdaSectionPage.js"
    },
    {
      "name": "enrollment_lag_days",
      "label": "Enrollment Lag Days",
      "type": "text",
      "defaultValue": "30",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIModelRiskPage.js"
    },
    {
      "name": "protocol_deviations",
      "label": "Protocol Deviations",
      "type": "text",
      "defaultValue": "4",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIModelRiskPage.js"
    },
    {
      "name": "alpha",
      "label": "Alpha (two-sided)",
      "type": "number",
      "defaultValue": "0.05",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPowerCalcExplainPage.js"
    },
    {
      "name": "dropout_rate",
      "label": "Pooled SD",
      "type": "number",
      "defaultValue": "0.15",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPowerCalcExplainPage.js"
    },
    {
      "name": "mde",
      "label": "Power (1 - beta)",
      "type": "number",
      "defaultValue": "0.5",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPowerCalcExplainPage.js"
    },
    {
      "name": "power",
      "label": "Alpha (two-sided)",
      "type": "number",
      "defaultValue": "0.9",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPowerCalcExplainPage.js"
    },
    {
      "name": "sd",
      "label": "Alpha (two-sided)",
      "type": "number",
      "defaultValue": "1.0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPowerCalcExplainPage.js"
    },
    {
      "name": "two_sided",
      "label": "MDE (minimum detectable effect)",
      "type": "checkbox",
      "defaultValue": "true",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPowerCalcExplainPage.js"
    },
    {
      "name": "mechanism",
      "label": "Indication",
      "type": "text",
      "defaultValue": "NMDA receptor antagonist (S-enantiomer of ketamine)",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRecommendEndpointsPage.js"
    },
    {
      "name": "proposed_use",
      "label": "Target Outcome",
      "type": "text",
      "defaultValue": "External control arm for single-arm Phase 1b expansion",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRweMatchPage.js"
    },
    {
      "name": "target_outcome",
      "label": "Indication",
      "type": "text",
      "defaultValue": "Overall survival",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRweMatchPage.js"
    },
    {
      "name": "target_population",
      "label": "Indication",
      "type": "textarea",
      "defaultValue": "Adults >= 18, ineligible for intensive chemotherapy",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRweMatchPage.js"
    },
    {
      "name": "target_enrollment",
      "label": "Indication",
      "type": "number",
      "defaultValue": "400",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISelectSitesPage.js"
    },
    {
      "name": "allocation_ratio",
      "label": "Power",
      "type": "text",
      "defaultValue": "1:1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISizeCohortPage.js"
    },
    {
      "name": "effect_size",
      "label": "Primary Endpoint",
      "type": "text",
      "defaultValue": "0.4% absolute reduction vs control",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISizeCohortPage.js"
    }
  ],
  "ai-pharma-trial-designer-ai-tools": [
    {
      "name": "design_family",
      "label": "Design Family",
      "type": "text",
      "defaultValue": "Group-sequential (O\\",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdaptiveSimPage.js"
    },
    {
      "name": "indication",
      "label": "Design Family",
      "type": "text",
      "defaultValue": "NSCLC",
      "placeholder": "",
      "options": [
        "Module 2.5 Clinical Overview",
        "Module 2.7 Clinical Summary",
        "Module 5 Clinical Study Reports",
        "Investigator\\",
        ",\n  ",
        "s Brochure — Clinical Experience",
        "IND Form FDA-1571 cover letter"
      ],
      "required": false,
      "source": "frontend/src/pages/AIAdaptiveSimPage.js"
    },
    {
      "name": "interim_fractions",
      "label": "Phase",
      "type": "text",
      "defaultValue": "0.5, 0.75",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdaptiveSimPage.js"
    },
    {
      "name": "phase",
      "label": "Design Family",
      "type": "select",
      "defaultValue": "III",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdaptiveSimPage.js"
    },
    {
      "name": "planned_n",
      "label": "Indication",
      "type": "number",
      "defaultValue": "600",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdaptiveSimPage.js"
    },
    {
      "name": "primary_endpoint",
      "label": "Design Family",
      "type": "text",
      "defaultValue": "Overall survival",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdaptiveSimPage.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Budget Burn Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBudgetBurnPage.js"
    },
    {
      "name": "compound",
      "label": "Indication",
      "type": "text",
      "defaultValue": "Pembrolizumab (MK-3475) + Pemetrexed",
      "placeholder": "",
      "options": [
        "Module 2.5 Clinical Overview",
        "Module 2.7 Clinical Summary",
        "Module 5 Clinical Study Reports",
        "Investigator\\",
        ",\n  ",
        "s Brochure — Clinical Experience",
        "IND Form FDA-1571 cover letter"
      ],
      "required": false,
      "source": "frontend/src/pages/AIDraftProtocolPage.js"
    },
    {
      "name": "population",
      "label": "Phase",
      "type": "textarea",
      "defaultValue": "Adults with confirmed stage IV NSCLC, PD-L1 TPS >= 1%, ECOG 0-1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDraftProtocolPage.js"
    },
    {
      "name": "sample_size",
      "label": "Investigational Compound",
      "type": "number",
      "defaultValue": "600",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDraftProtocolPage.js"
    },
    {
      "name": "duration_weeks",
      "label": "Indication",
      "type": "number",
      "defaultValue": "52",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDropoutPredictorPage.js"
    },
    {
      "name": "placebo_arm",
      "label": "Duration (weeks)",
      "type": "checkbox",
      "defaultValue": "true",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDropoutPredictorPage.js"
    },
    {
      "name": "visit_frequency",
      "label": "Indication",
      "type": "text",
      "defaultValue": "every 4 weeks",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDropoutPredictorPage.js"
    },
    {
      "name": "current_exclusion",
      "label": "Phase",
      "type": "textarea",
      "defaultValue": "Active brain metastases, ILD history, autoimmune disease on systemic steroids",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIeOptimizerPage.js"
    },
    {
      "name": "current_inclusion",
      "label": "Indication",
      "type": "textarea",
      "defaultValue": "Adults >= 18, ECOG 0-1, PD-L1 TPS >= 1%, no prior systemic therapy",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIeOptimizerPage.js"
    },
    {
      "name": "enrollment_target",
      "label": "Current Inclusion Criteria",
      "type": "number",
      "defaultValue": "600",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIeOptimizerPage.js"
    },
    {
      "name": "screen_fail_rate_pct",
      "label": "Current Exclusion Criteria",
      "type": "number",
      "defaultValue": "45",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIeOptimizerPage.js"
    },
    {
      "name": "program_stage",
      "label": "Indication",
      "type": "text",
      "defaultValue": "Phase 3 readout",
      "placeholder": "",
      "options": [
        "Module 2.5 Clinical Overview",
        "Module 2.7 Clinical Summary",
        "Module 5 Clinical Study Reports",
        "Investigator\\",
        ",\n  ",
        "s Brochure — Clinical Experience",
        "IND Form FDA-1571 cover letter"
      ],
      "required": false,
      "source": "frontend/src/pages/AIIndNdaSectionPage.js"
    },
    {
      "name": "section",
      "label": "Section",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Module 2.5 Clinical Overview",
        "Module 2.7 Clinical Summary",
        "Module 5 Clinical Study Reports",
        "Investigator\\",
        ",\n  ",
        "s Brochure — Clinical Experience",
        "IND Form FDA-1571 cover letter"
      ],
      "required": false,
      "source": "frontend/src/pages/AIIndNdaSectionPage.js"
    },
    {
      "name": "enrollment_lag_days",
      "label": "Enrollment Lag Days",
      "type": "text",
      "defaultValue": "30",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIModelRiskPage.js"
    },
    {
      "name": "protocol_deviations",
      "label": "Protocol Deviations",
      "type": "text",
      "defaultValue": "4",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIModelRiskPage.js"
    },
    {
      "name": "alpha",
      "label": "Alpha (two-sided)",
      "type": "number",
      "defaultValue": "0.05",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPowerCalcExplainPage.js"
    },
    {
      "name": "dropout_rate",
      "label": "Pooled SD",
      "type": "number",
      "defaultValue": "0.15",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPowerCalcExplainPage.js"
    },
    {
      "name": "mde",
      "label": "Power (1 - beta)",
      "type": "number",
      "defaultValue": "0.5",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPowerCalcExplainPage.js"
    },
    {
      "name": "power",
      "label": "Alpha (two-sided)",
      "type": "number",
      "defaultValue": "0.9",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPowerCalcExplainPage.js"
    },
    {
      "name": "sd",
      "label": "Alpha (two-sided)",
      "type": "number",
      "defaultValue": "1.0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPowerCalcExplainPage.js"
    },
    {
      "name": "two_sided",
      "label": "MDE (minimum detectable effect)",
      "type": "checkbox",
      "defaultValue": "true",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPowerCalcExplainPage.js"
    },
    {
      "name": "mechanism",
      "label": "Indication",
      "type": "text",
      "defaultValue": "NMDA receptor antagonist (S-enantiomer of ketamine)",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRecommendEndpointsPage.js"
    },
    {
      "name": "proposed_use",
      "label": "Target Outcome",
      "type": "text",
      "defaultValue": "External control arm for single-arm Phase 1b expansion",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRweMatchPage.js"
    },
    {
      "name": "target_outcome",
      "label": "Indication",
      "type": "text",
      "defaultValue": "Overall survival",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRweMatchPage.js"
    },
    {
      "name": "target_population",
      "label": "Indication",
      "type": "textarea",
      "defaultValue": "Adults >= 18, ineligible for intensive chemotherapy",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRweMatchPage.js"
    },
    {
      "name": "target_enrollment",
      "label": "Indication",
      "type": "number",
      "defaultValue": "400",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISelectSitesPage.js"
    },
    {
      "name": "allocation_ratio",
      "label": "Power",
      "type": "text",
      "defaultValue": "1:1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISizeCohortPage.js"
    },
    {
      "name": "effect_size",
      "label": "Primary Endpoint",
      "type": "text",
      "defaultValue": "0.4% absolute reduction vs control",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISizeCohortPage.js"
    }
  ]
};

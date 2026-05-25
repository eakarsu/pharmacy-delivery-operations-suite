export const sourceProjectTools = [
  {
    "id": "ai-pharmacy-operations-manager-source-workflow",
    "title": "AI Pharmacy Operations Manager Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIPharmacyOperationsManager.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIPharmacyOperationsManager to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Pharmacy Operations Manager source context",
    "outputLabel": "AI Pharmacy Operations Manager source analysis",
    "signals": [
      "frontend/src/pages/AIHistory",
      "frontend/src/pages/CFAgenticComplianceMonitoringPage",
      "frontend/src/pages/ClaimDenialPredict",
      "frontend/src/pages/Claims",
      "frontend/src/pages/GapAiadvancedJsAndAiresultsJsExistButTsvShowsPage",
      "frontend/src/pages/GapClaimsWithoutClaimPage",
      "frontend/src/pages/GapLimitedPatientCounselingToolsPage",
      "frontend/src/pages/InteractionCheckAI"
    ]
  },
  {
    "id": "ai-pharmacy-operations-manager-ai-tools",
    "title": "AI Pharmacy Operations Manager AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIPharmacyOperationsManager.",
    "defaultPrompt": "Review AIPharmacyOperationsManager AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Pharmacy Operations Manager AI prompt or tool context",
    "outputLabel": "AI Pharmacy Operations Manager AI tool response",
    "signals": [
      "frontend/src/pages/AIHistory.js",
      "frontend/src/pages/CFAgenticComplianceMonitoringPage.js",
      "frontend/src/pages/ClaimDenialPredict.js",
      "frontend/src/pages/Claims.js",
      "frontend/src/pages/GapAiadvancedJsAndAiresultsJsExistButTsvShowsPage.js",
      "frontend/src/pages/GapClaimsWithoutClaimPage.js",
      "frontend/src/pages/GapLimitedPatientCounselingToolsPage.js",
      "frontend/src/pages/InteractionCheckAI.js"
    ]
  },
  {
    "id": "ai-pharmacy-operations-manager-ai-history-f973tn-exact-ai",
    "title": "AI Pharmacy Operations Manager: AI History",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIHistory.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI History\" from AIPharmacyOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI History donor inputs",
    "outputLabel": "AI History AI response",
    "signals": [
      "frontend/src/pages/AIHistory.js"
    ]
  },
  {
    "id": "ai-pharmacy-operations-manager-cf-agentic-compliance-monitoring-page-1stt69-exact-ai",
    "title": "AI Pharmacy Operations Manager: CF Agentic Compliance Monitoring Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CFAgenticComplianceMonitoringPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"CF Agentic Compliance Monitoring Page\" from AIPharmacyOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "CF Agentic Compliance Monitoring Page donor inputs",
    "outputLabel": "CF Agentic Compliance Monitoring Page AI response",
    "signals": [
      "frontend/src/pages/CFAgenticComplianceMonitoringPage.js"
    ]
  },
  {
    "id": "ai-pharmacy-operations-manager-claim-denial-predict-1d9xwv-exact-ai",
    "title": "AI Pharmacy Operations Manager: Claim Denial Predict",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/ClaimDenialPredict.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Claim Denial Predict\" from AIPharmacyOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Claim Denial Predict donor inputs",
    "outputLabel": "Claim Denial Predict AI response",
    "signals": [
      "frontend/src/pages/ClaimDenialPredict.js"
    ]
  },
  {
    "id": "ai-pharmacy-operations-manager-claims-9qfsmg-exact-ai",
    "title": "AI Pharmacy Operations Manager: Claims",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/Claims.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Claims\" from AIPharmacyOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Claims donor inputs",
    "outputLabel": "Claims AI response",
    "signals": [
      "Amount",
      "Diagnosis Code",
      "Insurance Provider",
      "Medication",
      "Ndc Code",
      "Patient Name",
      "Policy Number",
      "Quantity"
    ]
  },
  {
    "id": "ai-pharmacy-operations-manager-gap-claims-without-claim-page-1lr5fm-exact-ai",
    "title": "AI Pharmacy Operations Manager: Gap Claims Without Claim Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapClaimsWithoutClaimPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Claims Without Claim Page\" from AIPharmacyOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Claims Without Claim Page donor inputs",
    "outputLabel": "Gap Claims Without Claim Page AI response",
    "signals": [
      "frontend/src/pages/GapClaimsWithoutClaimPage.js"
    ]
  },
  {
    "id": "ai-pharmacy-operations-manager-interaction-check-ai-8u4zxh-exact-ai",
    "title": "AI Pharmacy Operations Manager: Interaction Check AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/InteractionCheckAI.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Interaction Check AI\" from AIPharmacyOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Interaction Check AI donor inputs",
    "outputLabel": "Interaction Check AI AI response",
    "signals": [
      "frontend/src/pages/InteractionCheckAI.js"
    ]
  },
  {
    "id": "ai-pharmacy-operations-manager-ai-advanced-98178q-exact-ai",
    "title": "AI Pharmacy Operations Manager: AI Advanced",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/aiAdvanced.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Advanced\" from AIPharmacyOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Advanced donor inputs",
    "outputLabel": "AI Advanced AI response",
    "signals": [
      "Allergies = []",
      "Claim Id",
      "Conditions = []",
      "Medications",
      "Medications = []",
      "Patient Id"
    ]
  },
  {
    "id": "ai-pharmacy-operations-manager-claims-163xrf-exact-ai",
    "title": "AI Pharmacy Operations Manager: Claims",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/claims.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Claims\" from AIPharmacyOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Claims donor inputs",
    "outputLabel": "Claims AI response",
    "signals": [
      "Amount",
      "Diagnosis Code",
      "Insurance Provider",
      "Medication",
      "Ndc Code",
      "Patient Name",
      "Policy Number",
      "Quantity"
    ]
  },
  {
    "id": "ai-pharmacy-operations-manager-custom-feat01-agentic-compliance-monitoring-hz6s2t-exact-ai",
    "title": "AI Pharmacy Operations Manager: Custom Feat01 Agentic Compliance Monitoring",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/customFeat01_AgenticComplianceMonitoring.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Custom Feat01 Agentic Compliance Monitoring\" from AIPharmacyOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Custom Feat01 Agentic Compliance Monitoring donor inputs",
    "outputLabel": "Custom Feat01 Agentic Compliance Monitoring AI response",
    "signals": [
      "backend/routes/customFeat01_AgenticComplianceMonitoring.js"
    ]
  },
  {
    "id": "ai-pharmacy-operations-manager-gap-feat-claims-without-claim-139kfy-exact-ai",
    "title": "AI Pharmacy Operations Manager: Gap Feat Claims Without Claim",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gapFeat_claims_without_claim.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Feat Claims Without Claim\" from AIPharmacyOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Feat Claims Without Claim donor inputs",
    "outputLabel": "Gap Feat Claims Without Claim AI response",
    "signals": [
      "backend/routes/gapFeat_claims_without_claim.js"
    ]
  },
  {
    "id": "ai-pharma-trial-designer-source-workflow",
    "title": "AI Pharma Trial Designer Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIPharmaTrialDesigner.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIPharmaTrialDesigner to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Pharma Trial Designer source context",
    "outputLabel": "AI Pharma Trial Designer source analysis",
    "signals": [
      "frontend/src/pages/AIAdaptiveSimPage",
      "frontend/src/pages/AIBudgetBurnPage",
      "frontend/src/pages/AIDeviationClassifierPage",
      "frontend/src/pages/AIDraftProtocolPage",
      "frontend/src/pages/AIDropoutPredictorPage",
      "frontend/src/pages/AIDsmbAlertPage",
      "frontend/src/pages/AIEdcAnomalyPage",
      "frontend/src/pages/AIExpectedVsActualPage"
    ]
  },
  {
    "id": "ai-pharma-trial-designer-ai-tools",
    "title": "AI Pharma Trial Designer AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIPharmaTrialDesigner.",
    "defaultPrompt": "Review AIPharmaTrialDesigner AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Pharma Trial Designer AI prompt or tool context",
    "outputLabel": "AI Pharma Trial Designer AI tool response",
    "signals": [
      "frontend/src/pages/AIAdaptiveSimPage.js",
      "frontend/src/pages/AIBudgetBurnPage.js",
      "frontend/src/pages/AIDeviationClassifierPage.js",
      "frontend/src/pages/AIDraftProtocolPage.js",
      "frontend/src/pages/AIDropoutPredictorPage.js",
      "frontend/src/pages/AIDsmbAlertPage.js",
      "frontend/src/pages/AIEdcAnomalyPage.js",
      "frontend/src/pages/AIExpectedVsActualPage.js"
    ]
  },
  {
    "id": "ai-pharma-trial-designer-ai-adaptive-sim-page-1fkvmj-exact-ai",
    "title": "AI Pharma Trial Designer: AI Adaptive Sim Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIAdaptiveSimPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Adaptive Sim Page\" from AIPharmaTrialDesigner. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Adaptive Sim Page donor inputs",
    "outputLabel": "AI Adaptive Sim Page AI response",
    "signals": [
      "Design Family",
      "Design Family",
      "Phase",
      "Design Family",
      "Indication",
      "Design Family"
    ]
  },
  {
    "id": "ai-pharma-trial-designer-ai-budget-burn-page-11bagy-exact-ai",
    "title": "AI Pharma Trial Designer: AI Budget Burn Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIBudgetBurnPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Budget Burn Page\" from AIPharmaTrialDesigner. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Budget Burn Page donor inputs",
    "outputLabel": "AI Budget Burn Page AI response",
    "signals": [
      "frontend/src/pages/AIBudgetBurnPage.js"
    ]
  },
  {
    "id": "ai-pharma-trial-designer-ai-deviation-classifier-page-wxs0m-exact-ai",
    "title": "AI Pharma Trial Designer: AI Deviation Classifier Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIDeviationClassifierPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Deviation Classifier Page\" from AIPharmaTrialDesigner. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Deviation Classifier Page donor inputs",
    "outputLabel": "AI Deviation Classifier Page AI response",
    "signals": [
      "frontend/src/pages/AIDeviationClassifierPage.js"
    ]
  },
  {
    "id": "ai-pharma-trial-designer-ai-draft-protocol-page-2u2u0p-exact-ai",
    "title": "AI Pharma Trial Designer: AI Draft Protocol Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIDraftProtocolPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Draft Protocol Page\" from AIPharmaTrialDesigner. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Draft Protocol Page donor inputs",
    "outputLabel": "AI Draft Protocol Page AI response",
    "signals": [
      "Indication",
      "Indication",
      "Indication",
      "Phase",
      "Investigational Compound"
    ]
  },
  {
    "id": "ai-pharma-trial-designer-ai-dropout-predictor-page-upodkd-exact-ai",
    "title": "AI Pharma Trial Designer: AI Dropout Predictor Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIDropoutPredictorPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Dropout Predictor Page\" from AIPharmaTrialDesigner. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Dropout Predictor Page donor inputs",
    "outputLabel": "AI Dropout Predictor Page AI response",
    "signals": [
      "Indication",
      "Indication",
      "Indication",
      "Duration (weeks)",
      "Phase",
      "Indication"
    ]
  },
  {
    "id": "ai-pharma-trial-designer-ai-dsmb-alert-page-asx4nw-exact-ai",
    "title": "AI Pharma Trial Designer: AI Dsmb Alert Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIDsmbAlertPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Dsmb Alert Page\" from AIPharmaTrialDesigner. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Dsmb Alert Page donor inputs",
    "outputLabel": "AI Dsmb Alert Page AI response",
    "signals": [
      "frontend/src/pages/AIDsmbAlertPage.js"
    ]
  },
  {
    "id": "ai-pharma-trial-designer-ai-edc-anomaly-page-xrp5ch-exact-ai",
    "title": "AI Pharma Trial Designer: AI Edc Anomaly Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIEdcAnomalyPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Edc Anomaly Page\" from AIPharmaTrialDesigner. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Edc Anomaly Page donor inputs",
    "outputLabel": "AI Edc Anomaly Page AI response",
    "signals": [
      "frontend/src/pages/AIEdcAnomalyPage.js"
    ]
  },
  {
    "id": "ai-pharma-trial-designer-ai-expected-vs-actual-page-19zhla-exact-ai",
    "title": "AI Pharma Trial Designer: AI Expected Vs Actual Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIExpectedVsActualPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Expected Vs Actual Page\" from AIPharmaTrialDesigner. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Expected Vs Actual Page donor inputs",
    "outputLabel": "AI Expected Vs Actual Page AI response",
    "signals": [
      "frontend/src/pages/AIExpectedVsActualPage.js"
    ]
  },
  {
    "id": "ai-pharma-trial-designer-ai-generate-brief-page-1totxt-exact-ai",
    "title": "AI Pharma Trial Designer: AI Generate Brief Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIGenerateBriefPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Generate Brief Page\" from AIPharmaTrialDesigner. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Generate Brief Page donor inputs",
    "outputLabel": "AI Generate Brief Page AI response",
    "signals": [
      "frontend/src/pages/AIGenerateBriefPage.js"
    ]
  },
  {
    "id": "ai-pharma-trial-designer-ai-ie-optimizer-page-1p4wqo-exact-ai",
    "title": "AI Pharma Trial Designer: AI Ie Optimizer Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIIeOptimizerPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Ie Optimizer Page\" from AIPharmaTrialDesigner. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Ie Optimizer Page donor inputs",
    "outputLabel": "AI Ie Optimizer Page AI response",
    "signals": [
      "Phase",
      "Indication",
      "Current Inclusion Criteria",
      "Indication",
      "Indication",
      "Current Exclusion Criteria"
    ]
  },
  {
    "id": "ai-pharma-trial-designer-ai-ind-nda-section-page-ouxatn-exact-ai",
    "title": "AI Pharma Trial Designer: AI Ind Nda Section Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIIndNdaSectionPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Ind Nda Section Page\" from AIPharmaTrialDesigner. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Ind Nda Section Page donor inputs",
    "outputLabel": "AI Ind Nda Section Page AI response",
    "signals": [
      "Section",
      "Section",
      "Indication",
      "Section"
    ]
  },
  {
    "id": "ai-pharma-trial-designer-ai-irb-pkg-drafter-page-x47qyl-exact-ai",
    "title": "AI Pharma Trial Designer: AI Irb Pkg Drafter Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIIrbPkgDrafterPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Irb Pkg Drafter Page\" from AIPharmaTrialDesigner. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Irb Pkg Drafter Page donor inputs",
    "outputLabel": "AI Irb Pkg Drafter Page AI response",
    "signals": [
      "frontend/src/pages/AIIrbPkgDrafterPage.js"
    ]
  },
  {
    "id": "ai-pharma-trial-designer-ai-milestone-forecaster-page-xr62vc-exact-ai",
    "title": "AI Pharma Trial Designer: AI Milestone Forecaster Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIMilestoneForecasterPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Milestone Forecaster Page\" from AIPharmaTrialDesigner. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Milestone Forecaster Page donor inputs",
    "outputLabel": "AI Milestone Forecaster Page AI response",
    "signals": [
      "frontend/src/pages/AIMilestoneForecasterPage.js"
    ]
  },
  {
    "id": "ai-pharma-trial-designer-ai-model-risk-page-r0435y-exact-ai",
    "title": "AI Pharma Trial Designer: AI Model Risk Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIModelRiskPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Model Risk Page\" from AIPharmaTrialDesigner. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Model Risk Page donor inputs",
    "outputLabel": "AI Model Risk Page AI response",
    "signals": [
      "Enrollment Lag Days",
      "Protocol Deviations"
    ]
  },
  {
    "id": "ai-pharma-trial-designer-ai-patient-burden-page-13m5f7-exact-ai",
    "title": "AI Pharma Trial Designer: AI Patient Burden Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIPatientBurdenPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Patient Burden Page\" from AIPharmaTrialDesigner. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Patient Burden Page donor inputs",
    "outputLabel": "AI Patient Burden Page AI response",
    "signals": [
      "frontend/src/pages/AIPatientBurdenPage.js"
    ]
  },
  {
    "id": "ai-pharma-trial-designer-ai-power-calc-explain-page-1skhqn-exact-ai",
    "title": "AI Pharma Trial Designer: AI Power Calc Explain Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIPowerCalcExplainPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Power Calc Explain Page\" from AIPharmaTrialDesigner. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Power Calc Explain Page donor inputs",
    "outputLabel": "AI Power Calc Explain Page AI response",
    "signals": [
      "Alpha (two-sided)",
      "Pooled SD",
      "Power (1 - beta)",
      "Alpha (two-sided)",
      "Alpha (two-sided)",
      "MDE (minimum detectable effect)"
    ]
  },
  {
    "id": "ai-pharma-trial-designer-ai-query-resolver-page-11rjnr-exact-ai",
    "title": "AI Pharma Trial Designer: AI Query Resolver Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIQueryResolverPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Query Resolver Page\" from AIPharmaTrialDesigner. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Query Resolver Page donor inputs",
    "outputLabel": "AI Query Resolver Page AI response",
    "signals": [
      "frontend/src/pages/AIQueryResolverPage.js"
    ]
  },
  {
    "id": "ai-pharma-trial-designer-ai-recommend-endpoints-page-j9gmku-exact-ai",
    "title": "AI Pharma Trial Designer: AI Recommend Endpoints Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIRecommendEndpointsPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Recommend Endpoints Page\" from AIPharmaTrialDesigner. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Recommend Endpoints Page donor inputs",
    "outputLabel": "AI Recommend Endpoints Page AI response",
    "signals": [
      "Indication",
      "Indication",
      "Indication"
    ]
  },
  {
    "id": "ai-pharma-trial-designer-ai-regulatory-impact-page-1bnxwo-exact-ai",
    "title": "AI Pharma Trial Designer: AI Regulatory Impact Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIRegulatoryImpactPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Regulatory Impact Page\" from AIPharmaTrialDesigner. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Regulatory Impact Page donor inputs",
    "outputLabel": "AI Regulatory Impact Page AI response",
    "signals": [
      "frontend/src/pages/AIRegulatoryImpactPage.js"
    ]
  },
  {
    "id": "ai-pharma-trial-designer-ai-rwe-match-page-8ldrkp-exact-ai",
    "title": "AI Pharma Trial Designer: AI Rwe Match Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIRweMatchPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Rwe Match Page\" from AIPharmaTrialDesigner. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Rwe Match Page donor inputs",
    "outputLabel": "AI Rwe Match Page AI response",
    "signals": [
      "Indication",
      "Target Outcome",
      "Indication",
      "Indication"
    ]
  },
  {
    "id": "ai-pharma-trial-designer-ai-select-sites-page-19rdj9-exact-ai",
    "title": "AI Pharma Trial Designer: AI Select Sites Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AISelectSitesPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Select Sites Page\" from AIPharmaTrialDesigner. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Select Sites Page donor inputs",
    "outputLabel": "AI Select Sites Page AI response",
    "signals": [
      "Indication",
      "Indication",
      "Indication"
    ]
  },
  {
    "id": "ai-pharma-trial-designer-ai-size-cohort-page-139i2d-exact-ai",
    "title": "AI Pharma Trial Designer: AI Size Cohort Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AISizeCohortPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Size Cohort Page\" from AIPharmaTrialDesigner. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Size Cohort Page donor inputs",
    "outputLabel": "AI Size Cohort Page AI response",
    "signals": [
      "Power",
      "Primary Endpoint",
      "Effect Size",
      "Primary Endpoint",
      "Primary Endpoint",
      "Primary Endpoint"
    ]
  },
  {
    "id": "ai-pharma-trial-designer-ai-statistical-imbalance-page-1n1vxm-exact-ai",
    "title": "AI Pharma Trial Designer: AI Statistical Imbalance Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIStatisticalImbalancePage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Statistical Imbalance Page\" from AIPharmaTrialDesigner. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Statistical Imbalance Page donor inputs",
    "outputLabel": "AI Statistical Imbalance Page AI response",
    "signals": [
      "frontend/src/pages/AIStatisticalImbalancePage.js"
    ]
  },
  {
    "id": "ai-pharma-trial-designer-ai-5cuwes-exact-ai",
    "title": "AI Pharma Trial Designer: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIPharmaTrialDesigner. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "backend/routes/ai.js"
    ]
  }
];

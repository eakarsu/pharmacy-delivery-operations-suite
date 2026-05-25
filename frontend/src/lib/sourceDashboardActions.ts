export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "ai-assistant",
    "label": "AI Assistant",
    "description": "Run source-derived AI assistant workflows and prompts.",
    "href": "/features/ai-tools",
    "sourceProjects": [
      "AIPharmaTrialDesigner",
      "AIPharmacyOperationsManager"
    ],
    "examples": [
      "backend/ai",
      "backend/routes/aiAdvanced",
      "backend/routes/aiResults",
      "backend/routes/claims",
      "backend/routes/customFeat01_AgenticComplianceMonitoring",
      "backend/routes/gapFeat_aiadvanced_js_and_airesults_js_exist_but_tsv_shows"
    ],
    "count": 2
  },
  {
    "id": "customers",
    "label": "Customers",
    "description": "Open customer, client, patient, member, or lead workflows.",
    "href": "/features",
    "sourceProjects": [
      "AIPharmacyOperationsManager"
    ],
    "examples": [
      "backend/routes/gapFeat_limited_patient_counseling_tools",
      "frontend/src/pages/GapLimitedPatientCounselingToolsPage"
    ],
    "count": 1
  }
];

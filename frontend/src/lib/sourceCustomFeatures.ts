import type { FeatureContext, FeatureDefinition, PageDefinition } from '@/lib/unifiedApp';
import type { FeatureEntitySet } from '@/lib/featureEntities';
import type { FeatureSurface } from '@/lib/featureSurfaces';

export const sourceCustomFeatureCatalog: FeatureDefinition[] = [
  {
    "title": "AI Pharmacy Operations Manager Source Feature",
    "href": "/features/source-ai-pharmacy-operations-manager",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIPharmacyOperationsManager: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "16 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Pharma Trial Designer Source Feature",
    "href": "/features/source-ai-pharma-trial-designer",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIPharmaTrialDesigner: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "29 AI, prompt, tool, or workflow files captured"
    ]
  }
];

export const sourceCustomFeatureFamilies: Array<{ name: string; features: string[] }> = [
  {
    "name": "Source Project Features",
    "features": [
      "AI Pharmacy Operations Manager Source Feature",
      "AI Pharma Trial Designer Source Feature"
    ]
  }
];

export const sourceCustomPageRegistry: Record<string, PageDefinition> = {
  "source-ai-pharmacy-operations-manager": {
    "title": "AI Pharmacy Operations Manager Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIPharmacyOperationsManager, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIPharmacyOperationsManager: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "16 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "16",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-pharma-trial-designer": {
    "title": "AI Pharma Trial Designer Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIPharmaTrialDesigner, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIPharmaTrialDesigner: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "29 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "29",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  }
};

export const sourceCustomFeatureContexts: Record<string, FeatureContext> = {
  "AI Pharmacy Operations Manager Source Feature": {
    "sourceOwners": [
      "AIPharmacyOperationsManager"
    ],
    "operatingQueues": [
      "AI History",
      "CF Agentic Compliance Monitoring Page",
      "Claim Denial Predict",
      "Claims"
    ],
    "outputs": [
      "AI Pharmacy Operations Manager merged workflow register",
      "AI Pharmacy Operations Manager API and route coverage map",
      "AI Pharmacy Operations Manager AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Pharma Trial Designer Source Feature": {
    "sourceOwners": [
      "AIPharmaTrialDesigner"
    ],
    "operatingQueues": [
      "AI Adaptive Sim Page",
      "AI Budget Burn Page",
      "AI Deviation Classifier Page",
      "AI Draft Protocol Page"
    ],
    "outputs": [
      "AI Pharma Trial Designer merged workflow register",
      "AI Pharma Trial Designer API and route coverage map",
      "AI Pharma Trial Designer AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  }
};

export const sourceCustomFeatureSurfaceBySlug: Record<string, FeatureSurface> = {
  "source-ai-pharmacy-operations-manager": {
    "workItems": [
      {
        "id": "source-ai-pharmacy-operations-manager-work-1",
        "item": "AI History",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIHistory.js"
      },
      {
        "id": "source-ai-pharmacy-operations-manager-work-2",
        "item": "CF Agentic Compliance Monitoring Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/CFAgenticComplianceMonitoringPage.js"
      },
      {
        "id": "source-ai-pharmacy-operations-manager-work-3",
        "item": "Claim Denial Predict",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/ClaimDenialPredict.js"
      },
      {
        "id": "source-ai-pharmacy-operations-manager-work-4",
        "item": "Claims",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/Claims.js"
      },
      {
        "id": "source-ai-pharmacy-operations-manager-work-5",
        "item": "Gap Aiadvanced Js And Airesults Js Exist But Tsv Shows Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/GapAiadvancedJsAndAiresultsJsExistButTsvShowsPage.js"
      },
      {
        "id": "source-ai-pharmacy-operations-manager-work-6",
        "item": "Gap Claims Without Claim Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/GapClaimsWithoutClaimPage.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-pharmacy-operations-manager-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-pharmacy-operations-manager-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-pharmacy-operations-manager-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-pharmacy-operations-manager-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-pharmacy-operations-manager-log-1",
        "message": "Deep-merge feature generated from AIPharmacyOperationsManager",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-pharmacy-operations-manager-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-pharma-trial-designer": {
    "workItems": [
      {
        "id": "source-ai-pharma-trial-designer-work-1",
        "item": "AI Adaptive Sim Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIAdaptiveSimPage.js"
      },
      {
        "id": "source-ai-pharma-trial-designer-work-2",
        "item": "AI Budget Burn Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIBudgetBurnPage.js"
      },
      {
        "id": "source-ai-pharma-trial-designer-work-3",
        "item": "AI Deviation Classifier Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIDeviationClassifierPage.js"
      },
      {
        "id": "source-ai-pharma-trial-designer-work-4",
        "item": "AI Draft Protocol Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIDraftProtocolPage.js"
      },
      {
        "id": "source-ai-pharma-trial-designer-work-5",
        "item": "AI Dropout Predictor Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIDropoutPredictorPage.js"
      },
      {
        "id": "source-ai-pharma-trial-designer-work-6",
        "item": "AI Dsmb Alert Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIDsmbAlertPage.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-pharma-trial-designer-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-pharma-trial-designer-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-pharma-trial-designer-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-pharma-trial-designer-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-pharma-trial-designer-log-1",
        "message": "Deep-merge feature generated from AIPharmaTrialDesigner",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-pharma-trial-designer-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  }
};

export const sourceCustomFeatureEntitiesBySlug: Record<string, FeatureEntitySet> = {
  "source-ai-pharmacy-operations-manager": {
    "title": "AI Pharmacy Operations Manager Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-pharmacy-operations-manager-entity-1",
        "name": "AI History",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-pharmacy-operations-manager-entity-2",
        "name": "CF Agentic Compliance Monitoring Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-pharmacy-operations-manager-entity-3",
        "name": "Claim Denial Predict",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-pharmacy-operations-manager-entity-4",
        "name": "Claims",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-pharmacy-operations-manager-entity-5",
        "name": "Gap Aiadvanced Js And Airesults Js Exist But Tsv Shows Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-pharma-trial-designer": {
    "title": "AI Pharma Trial Designer Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-pharma-trial-designer-entity-1",
        "name": "AI Adaptive Sim Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-pharma-trial-designer-entity-2",
        "name": "AI Budget Burn Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-pharma-trial-designer-entity-3",
        "name": "AI Deviation Classifier Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-pharma-trial-designer-entity-4",
        "name": "AI Draft Protocol Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-pharma-trial-designer-entity-5",
        "name": "AI Dropout Predictor Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  }
};

export const sourceCustomFeatureLinksByProject: Record<string, string> = {
  "AIPharmacyOperationsManager": "/features/source-ai-pharmacy-operations-manager",
  "AIPharmaTrialDesigner": "/features/source-ai-pharma-trial-designer"
};

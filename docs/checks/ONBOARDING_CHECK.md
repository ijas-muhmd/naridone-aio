# Onboarding Process Verification

This document tracks the verification of the onboarding process, from installation to initial results display.

## Checklist

### 1. Installation & Initial Setup
- [x] User installs the app.
- [x] Initial data fetching/setup (store details).
- [x] **Code:** `app/routes/app.onboarding.tsx` triggers `OnboardingService.startSilentScan`.

### 2. Topic Generation
- [x] **Requirement:** Generate topics based on products, market, and generic single search about their brand name in Google.
- [x] **Status:** ✅ **Fixed**
- [x] **Findings:**
    - Updated `TopicAnalysisService.discoverTopics` in `app/services/topic_analysis.server.ts`.
    - Added logic to fetch `shop.industry` (market).
    - Added logic to perform a "Generic Brand Search" via SearchApi.io (Google engine).
    - Updated the AI prompt to include Brand, Industry, and Search Context (snippets from Google).

### 3. Topic Selection & Prompt Display
- [x] **Requirement:** User selects topics, then sees prompts under them.
- [x] **Status:** ✅ **Verified**
- [x] **Findings:**
    - Step 1 allows topic selection (`app/routes/app.onboarding.tsx`).
    - Step 2 calls `AIService.generatePromptsForTopics` using selected topics.
    - `AIService.generatePromptsForTopics` generates relevant prompts using shop industry/brand context.

### 4. Running Prompts & Displaying Results
- [x] **Requirement:** Run prompts for selected topics.
- [x] **Requirement:** Show REAL results (no dummy data).
- [x] **Requirement:** Remove logos or names (if referring to placeholders/competitors).
- [x] **Status:** ✅ **Fixed**
- [x] **Findings:**
    - `AIService.runAnalysis` uses real runners (`SearchApiRunner`, etc.) to get live SERP data.
    - Removed "Trusted By" section (containing dummy brands like Attio, Brevo) from `app/routes/app.onboarding.tsx` Step 3 view.
    - Confirmed competitor logos in the results table are rendered as *Initials* (no images), satisfying the "remove logos" request for results.

# Architecture Overview

This document describes PractiPrep at a high level for public product presentation. It intentionally omits implementation details, source code, database schemas, prompts, and backend logic.

## Product Architecture

PractiPrep is structured around five major product areas:

1. **Authentication and account state**
   User accounts allow learners to keep app access and supported user data connected across sessions and devices.

2. **Learning content and navigation**
   The app organizes preparation around Fachwirt qualification tracks and exam-relevant learning areas.

3. **Practice and exam workflows**
   Learners can move through practice questions, structured learning modes, and exam-style preparation sessions.

4. **Premium entitlement layer**
   Paid access is handled through platform subscription systems and entitlement management.

5. **AI learning support**
   AI assistance is provided through protected backend calls instead of exposing model credentials in the mobile app.

## High-Level Stack

- Mobile app: React Native, Expo, TypeScript
- Authentication and backend services: Supabase
- Subscription entitlement management: RevenueCat
- iOS payments: Apple App Store in-app purchases
- AI provider: Anthropic Claude API through protected server-side functions
- Local state: device-level persistence for responsive learning workflows

## Security and IP Boundaries

The production implementation is private. This public repository does not contain:

- App source code
- Backend functions
- Database schema
- Question content
- AI prompts
- Payment implementation
- API keys or environment configuration

The purpose of this repository is to communicate product direction and engineering scope without making the product copyable.
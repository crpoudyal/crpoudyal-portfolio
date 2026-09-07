-- ==============================================================================
-- Supabase SQL Migration Script: Paaila Technologies Projects & Experience
-- Run this script in the Supabase SQL Editor (Dashboard > SQL Editor)
-- ==============================================================================

-- 1. Remove legacy Weather and News app projects
DELETE FROM projects 
WHERE id IN (1, 2) 
   OR title ILIKE '%weather%' 
   OR title ILIKE '%news%';

-- 2. Upsert DynamicEMR - HR (Paaila Technologies)
INSERT INTO projects (
  id, 
  title, 
  description, 
  liveUrl, 
  imageUrl, 
  tags, 
  detailed_description, 
  additional_images
)
VALUES (
  1,
  'DynamicEMR - HR',
  'An enterprise-grade mobile human resource management system built for healthcare institutions running the DynamicEMR ERP platform. Features live GPS attendance check-in, real-time leave approvals, and shift scheduling.',
  'https://play.google.com/store/apps/details?id=com.paailatechnologies.dynamicemr',
  '/assets/dynamicemr-hr-1.png',
  ARRAY['Flutter', 'Dart', 'Clean Architecture', 'flutter_bloc', 'HRMS', 'GPS Geofencing', 'Firebase FCM', 'REST API', 'Dio'],
  E'DynamicEMR HRMS Mobile App is designed exclusively for employees of healthcare institutions using the DynamicEMR ERP platform.\n\nKey Engineering & Feature Highlights:\n• GPS-Enabled Live Attendance & Check-In: Geo-fenced mobile check-in ensuring shift transparency.\n• End-to-End Leave Workflow: Real-time leave submission, balance calculations, and instant manager approvals.\n• Hospital Shift Rosters: Instant mobile visibility into multi-shift rotations and on-call timetables.\n• Real-Time FCM Alerts: Critical administrative notifications and organizational broadcasts.\n• Clean Architecture & BLoC: Enterprise separation of Presentation, Domain, and Data layers.',
  ARRAY['/assets/dynamicemr-hr-1.png', '/assets/dynamicemr-hr-2.png', '/assets/dynamicemr-hr-3.png']
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  liveUrl = EXCLUDED.liveUrl,
  imageUrl = EXCLUDED.imageUrl,
  tags = EXCLUDED.tags,
  detailed_description = EXCLUDED.detailed_description,
  additional_images = EXCLUDED.additional_images;

-- 3. Upsert DynamicEMR - Outreach (Paaila Technologies)
INSERT INTO projects (
  id, 
  title, 
  description, 
  liveUrl, 
  imageUrl, 
  tags, 
  detailed_description, 
  additional_images
)
VALUES (
  2,
  'DynamicEMR - Outreach',
  'A specialized healthcare outreach and field activity management mobile app empowering medical teams to conduct health camps, capture patient screening data in remote areas, and synchronize seamlessly with the central hospital EMR.',
  'https://play.google.com/store/apps/details?id=com.paailatechnologies.dynamicEMROutreach',
  '/assets/dynamicemr-outreach-1.png',
  ARRAY['Flutter', 'Dart', 'Offline-First', 'SQLite', 'flutter_bloc', 'Healthcare EMR', 'Field Activities', 'Sync Engine'],
  E'DynamicEMR Outreach is designed to help healthcare teams efficiently coordinate field outreach activities and medical camps.\n\nKey Engineering & Feature Highlights:\n• 100% Offline-First Data Capture: Local SQLite storage for remote patient evaluations without network connectivity.\n• Resilient Two-Way Cloud Sync: Automated background reconciliation with central hospital EMR once online.\n• Medical Camp Management: Lifecycle tracking of field visits, assigned medical staff, and community screenings.\n• Geo-Tagging & Visit Audit Trails: GPS-verified visit coordinates for accountability.\n• Clinical Coordination: Aggregated summaries of screening results and diagnostic referrals.',
  ARRAY['/assets/dynamicemr-outreach-1.png', '/assets/dynamicemr-outreach-2.png', '/assets/dynamicemr-outreach-3.png']
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  liveUrl = EXCLUDED.liveUrl,
  imageUrl = EXCLUDED.imageUrl,
  tags = EXCLUDED.tags,
  detailed_description = EXCLUDED.detailed_description,
  additional_images = EXCLUDED.additional_images;

-- 4. Clean up legacy row 4 if present
DELETE FROM projects WHERE id = 4;

-- 5. Ensure Paaila Technologies experience record has official logo
UPDATE experiences 
SET logo = '/assets/paaila-logo.png' 
WHERE company ILIKE '%paaila%';

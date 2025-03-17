# Super.One Fan Battle Dashboard

This repository contains a React-based dashboard for Super.One Fan Battle mobile app, featuring downloads, revenue, and game analytics data from January 30 to March 15, 2025.

![Super.One Logo](https://play-lh.googleusercontent.com/oCG2RNsN6BrsrAYfKbg5QIu--yG3BMsr8GhOpN3AoBjxx1o8BtVpn0Sto3g9YQZn19s)

## Features

- **Platform Downloads Analysis**: Track iOS vs Android downloads with daily and weekly views
- **Revenue Analysis**: Visualize revenue distribution and trends by platform
- **Game Analytics**: Advanced player engagement and performance metrics including:
  - Daily and Monthly Active Users (DAU/MAU)
  - Session metrics (length, frequency)
  - New user acquisition data
  - Platform comparison insights
- **App Store Intelligence**: Comprehensive AppTweak metrics:
  - Competitor analysis and market positioning
  - Feature comparison matrix
  - User ratings and reviews analytics
  - Version history and feature adoption tracking  
- **Key Insights**: Strategic analysis of cross-platform performance
- **Interactive Charts**: Visualizations built with Recharts for better understanding of data
- **Responsive Design**: Optimized for both desktop and mobile viewing
- **Tab Navigation**: Easy switching between different dashboard views

## Data Highlights

- **Total Downloads**: 4,028 (iOS: 2,039 / Android: 1,989)
- **Total Revenue**: $1,297.04 (iOS: $373.00 / Android: $924.04)
- **Platform Dynamics**: iOS leads in downloads (50.6%) while Android dominates revenue (71.2%)
- **Daily Active Users**: Average 6,101 DAU across both platforms during the analysis period
- **User Growth**: iOS DAU grew 7.4% from January to March, Android grew 3.2%
- **New Users**: Over 33,800 new users acquired during the analysis period
- **Session Metrics**: Android users average 2.73 sessions per user vs 2.25 for iOS
- **App Updates**: 2 iOS releases (v3.87, v3.88) and 3 Android releases (v5.2.3, v5.2.4, v5.2.5) during the period
- **Competitor Insights**: Market position and feature analysis compared to Trivia Star, QuizTime Live, and Fan Quest Trivia

## Getting Started

1. Clone the repository:
```
git clone https://github.com/robertredbox/RBM_SuperOne_Dashboard_170325.git
```

2. Navigate to the project directory:
```
cd RBM_SuperOne_Dashboard_170325
```

3. Install dependencies:
```
npm install
```

4. Start the development server:
```
npm start
```

The dashboard will be available at [http://localhost:3000](http://localhost:3000)

## Technology Stack

- React
- Recharts for data visualization
- GameAnalytics API for user engagement metrics
- AppTweak MCP for app store intelligence
- Tailwind CSS for styling
- Responsive design for all screen sizes

## Dashboard Sections

### Downloads & Revenue
This section provides side-by-side comparisons of download volumes and revenue metrics across both iOS and Android platforms, with detailed charts showing daily and weekly trends.

### Game Analytics
The Game Analytics tab offers deep insights into player behavior derived from the GameAnalytics API, including:
- User growth metrics with platform breakdowns
- Session length and frequency analysis
- New user acquisition patterns
- Monthly aggregated user activity 
- Platform-specific engagement metrics

### Competitive Analysis
The new Competitive Analysis section leverages AppTweak data to provide:
- Feature comparison matrix with key competitors
- Market position visualization showing relative market share
- Competitor performance metrics (downloads, ratings, DAU)
- Strengths and areas for improvement identification

### Key Insights
This section summarizes the most important findings from all data sources, highlighting opportunities for growth and optimization.

## Data Sources

- **Downloads & Revenue Data**: Collected from app store platforms for period January 30 - March 15, 2025
- **Game Analytics Data**: Retrieved using GameAnalytics API for the same period, providing deeper engagement metrics that complement the store data
- **App Store Intelligence**: Collected via AppTweak MCP for comprehensive market positioning and competitor analysis

## Recent Updates
- **March 17, 2025**: Added AppTweak MCP integration with competitive analysis
- **March 15, 2025**: Updated data through March 15, 2025

## License

This dashboard is proprietary to RedBox Mobile and Super.One. Unauthorized use, distribution, or modification is prohibited.

## Contact

For questions or inquiries about this dashboard, please contact robert@redboxmobile.com.

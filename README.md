# Aakriti's Digital Canvas

{

  "app": {

    "name": "Aakriti Thakur Portfolio",

    "theme": {

      "mode": "dark",

      "colors": {

        "bg": "#0A0A0A",

        "surface": "#111111",

        "text": "#FFFFFF",

        "muted": "#A1A1A1",

        "accent": "linear-gradient(135deg, #00FFB2, #007BFF)"

      },

      "radius": "16px",

      "shadow": "soft-glow"

    },

    "typography": {

      "heading": {

        "font": "Satoshi",

        "weight": "700",

        "tracking": "-0.02em"

      },

      "body": {

        "font": "Inter",

        "weight": "400"

      }

    }

  },

  "layout": {

    "container": "1200px",

    "spacing": "section-lg"

  },

  "navbar": {

    "type": "sticky",

    "variant": "blur",

    "logo": "Aakriti Thakur",

    "menu": [

      { "label": "Work", "link": "#work" },

      { "label": "About", "link": "#about" },

      { "label": "Experience", "link": "#experience" },

      { "label": "Contact", "link": "#contact" }

    ],

    "cta": {

      "label": "View Resume",

      "style": "outline-pill"

    }

  },

  "sections": [

    {

      "id": "hero",

      "component": "hero.split",

      "props": {

        "alignment": "center-left",

        "height": "90vh",

        "background": "radial-gradient glow subtle",

        "left": {

          "badge": {

            "text": "🟢 Open to opportunities",

            "variant": "glass"

          },

          "title": {

            "text": "AAKRITI THAKUR",

            "size": "display-xl"

          },

          "subtitle": {

            "text": "UX Manager | Product Designer",

            "size": "xl",

            "muted": true

          },

          "description": "Designing scalable, user-centered products and leading UX strategy across AI platforms.",

          "actions": [

            {

              "label": "View Work",

              "variant": "primary-gradient"

            },

            {

              "label": "Download Resume",

              "variant": "secondary"

            }

          ]

        },

        "right": {

          "component": "image.card",

          "style": "portrait-glow",

          "overlay": "gradient-dark",

          "border": "soft"

        }

      }

    },

    {

      "id": "work",

      "component": "grid.cards",

      "props": {

        "title": "Featured Work",

        "columns": 2,

        "gap": "lg",

        "cardStyle": "glass-hover",

        "items": [

          {

            "title": "M2T Website",

            "description": "UX strategy and website design improving clarity and usability.",

            "tag": "UX Strategy"

          },

          {

            "title": "AI Job Matcher Dashboard",

            "description": "Simplified workflows and enhanced user experience.",

            "tag": "Dashboard UX"

          },

          {

            "title": "AI SaaS Dashboards",

            "description": "Turned complex analytics into actionable insights.",

            "tag": "Data Visualization"

          },

          {

            "title": "Fundin Bharat Platform",

            "description": "FinTech dashboard and web experience focused on trust.",

            "tag": "FinTech"

          }

        ]

      }

    },

    {

      "id": "about",

      "component": "split.content",

      "props": {

        "title": "About Me",

        "layout": "text-left",

        "content": "I’m a product-focused designer with 4+ years of experience in AI-powered SaaS platforms, dashboards, and web/mobile applications. I specialize in simplifying complex workflows into intuitive experiences.",

        "bullets": [

          "Founding designer experience",

          "UX strategy & product thinking",

          "Design systems & scalability",

          "Cross-functional leadership"

        ]

      }

    },

    {

      "id": "experience",

      "component": "timeline.vertical",

      "props": {

        "title": "Experience",

        "items": [

          {

            "title": "UX & Design Manager",

            "meta": "Jan 2026 - Present",

            "points": [

              "Leading UX across AI platforms",

              "Managing and mentoring designers",

              "Driving product vision and UX direction"

            ]

          },

          {

            "title": "Senior UI/UX Designer - Zipteams",

            "meta": "Mar 2023 - Jan 2025",

            "points": [

              "Founding designer",

              "Designed AI dashboards",

              "Built scalable design system"

            ]

          },

          {

            "title": "UI/UX Consultant - M2T",

            "meta": "Oct 2025 - Dec 2025",

            "points": [

              "Defined UX strategy",

              "Designed website and dashboard"

            ]

          },

          {

            "title": "UI Designer - Net Solutions",

            "meta": "Apr 2025 - Sept 2025",

            "points": [

              "Designed marketing assets",

              "Ensured visual consistency"

            ]

          }

        ]

      }

    },

    {

      "id": "skills",

      "component": "grid.pills",

      "props": {

        "title": "Skills & Tools",

        "items": [

          "UX Strategy",

          "Product Design",

          "User Research",

          "Interaction Design",

          "Design Systems",

          "Figma",

          "Hotjar",

          "Google Analytics",

          "ChatGPT",

          "Gemini"

        ]

      }

    },

    {

      "id": "leadership",

      "component": "grid.feature",

      "props": {

        "title": "Leadership & Impact",

        "columns": 2,

        "items": [

          "Built and scaled design function",

          "Led UX across multiple AI products",

          "Improved usability and workflows",

          "Mentored team and improved delivery"

        ]

      }

    },

    {

      "id": "contact",

      "component": "cta.center",

      "props": {

        "title": "Let’s build something impactful together",

        "subtitle": "Open to product, UX leadership, and design opportunities",

        "actions": [

          {

            "label": "Get in Touch",

            "variant": "primary-gradient"

          }

        ]

      }

    }

  ],

  "motion": {

    "scroll": "smooth",

    "reveal": "fade-up",

    "hover": "lift-glow",

    "duration": "medium"

  }

}

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://aakriti-thakur-15.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/08589ed5-f4e3-4653-b99b-3b2517531c63).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

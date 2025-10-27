
import { Locale, locales } from "./locales";

export type NavCopy = {
  navItems: { label: string; href: string }[];
  tagline: string;
};

export type HeroCopy = {
  badge: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  highlights: string[];
  imageAlt: string;
  logoOpacity: number;
};

export type ServiceItem = {
  title: string;
  description: string;
  image: { src: string; alt: string };
};

export type ServicesCopy = {
  label: string;
  title: string;
  description: string;
  items: ServiceItem[];
};

export type ApproachCopy = {
  label: string;
  title: string;
  description: string;
  pillars: { title: string; detail: string }[];
};

export type ValuesCopy = {
  label: string;
  title: string;
  items: { name: string; description: string }[];
};

export type FooterCopy = {
  note: string;
  attributes: string[];
  links: { label: string; href: string }[];
};

export type MetadataCopy = {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
};

export type LocaleDictionary = {
  nav: NavCopy;
  hero: HeroCopy;
  services: ServicesCopy;
  approach: ApproachCopy;
  values: ValuesCopy;
  footer: FooterCopy;
  metadata: MetadataCopy;
};

const dictionaries: Record<Locale, LocaleDictionary> = {
  "en": {
    "nav": {
      "navItems": [
        {
          "label": "Services",
          "href": "#services"
        },
        {
          "label": "Approach",
          "href": "#approach"
        },
        {
          "label": "Values",
          "href": "#values"
        }
      ],
      "tagline": "Bespoke mandates only"
    },
    "hero": {
      "badge": "Swiss Private Equity Firm · Est. 2015",
      "title": "Building enduring lifestyle platforms with the precision of Swiss entrepreneurship.",
      "description": "BE Capital SA partners with visionary founders redefining leisure, real estate, and digital commerce. Our founder-led heritage—responsible for more than CHF 2 billion in value creation—enables decisive investing, operational support, and compounding outcomes over decades.",
      "primaryCta": {
        "label": "Investment philosophy",
        "href": "#approach"
      },
      "highlights": [
        "CHF 2.0 Bn+ value created",
        "Leisure · Living · Commerce",
        "Buy & hold horizon of 12+ years"
      ],
      "imageAlt": "Founders meeting overlooking the Swiss Alps",
      "logoOpacity": 0.16
    },
    "services": {
      "label": "Investment Themes",
      "title": "Focused mandates where experiential living, property, and digital commerce intersect.",
      "description": "We pursue control and reference minority positions across Europe, scaling platforms through disciplined roll-ups, organic growth engines, and precise capital programs.",
      "items": [
        {
          "title": "Leisure & Hospitality Platforms",
          "description": "We acquire and scale destination concepts that blend hospitality, wellness, and curated experiences, elevating them into defensible lifestyle ecosystems.",
          "image": {
            "src": "/images/services-leisure.png",
            "alt": "Luxury alpine resort terrace at sunset"
          }
        },
        {
          "title": "Living & Real Assets",
          "description": "From urban residences to alpine retreats, we reposition real estate with data-informed capital programs that unlock new revenue layers and long-term resilience.",
          "image": {
            "src": "/images/services-living.png",
            "alt": "Minimalist penthouse living room with Swiss lake view"
          }
        },
        {
          "title": "Digital Commerce & Experiences",
          "description": "We back omnichannel brands and infrastructure that connect physical venues with digital journeys, compounding engagement across markets and modalities.",
          "image": {
            "src": "/images/services-digital.png",
            "alt": "Premium workspace with digital analytics display"
          }
        },
        {
          "title": "Buy & Hold Stewardship",
          "description": "Our evergreen capital structure supports 12+ year ownership horizons, embedding operational talent, governance, and succession planning to sustain momentum.",
          "image": {
            "src": "/images/buyhold.png",
            "alt": "Partners reviewing multi-decade strategy in alpine glass boardroom"
          }
        }
      ]
    },
    "approach": {
      "label": "Approach",
      "title": "Entrepreneurial instinct guided by disciplined, long-term stewardship.",
      "description": "We embed capital allocation, governance, and operations within a single continuum. Decisions remain swift, data-rich, and anchored in decades of founder experience.",
      "pillars": [
        {
          "title": "Entrepreneurial DNA",
          "detail": "Direct access to founders who have scaled, listed, and exited lifestyle businesses. We operate as partners in the arena, not capital on the sidelines."
        },
        {
          "title": "Operational Depth",
          "detail": "Operating partners orchestrate experience design, proptech, and omnichannel growth. Every mandate receives a bespoke value-creation sprint."
        },
        {
          "title": "Capital with Permanence",
          "detail": "A balance sheet structure that favours buy-and-hold. We recycle only when strategic arcs mature, protecting long-term compounding."
        }
      ]
    },
    "values": {
      "label": "Values",
      "title": "Guiding principles for partnerships and sustainable growth.",
      "items": [
        {
          "name": "Entrepreneurial Grit",
          "description": "Builders first. We immerse ourselves alongside management to navigate ambiguity and unlock the next chapter."
        },
        {
          "name": "Disciplined Patience",
          "description": "A buy-and-hold mentality that favours durable advantage over short-term optics. We compound thoughtfully."
        },
        {
          "name": "Aligned Ownership",
          "description": "Material co-investment and governance alignment keep incentives tied to the strategic arc."
        },
        {
          "name": "Experiential Insight",
          "description": "Decades inside leisure, living, and commerce inform every decision—from concept design to global rollout."
        }
      ]
    },
    "footer": {
      "note": "© {year} BE Capital SA. All rights reserved.",
      "attributes": [
        "Switzerland",
        "Private equity house"
      ],
      "links": [
        {
          "label": "Legal notice",
          "href": "#"
        },
        {
          "label": "Privacy",
          "href": "#"
        }
      ]
    },
    "metadata": {
      "title": "BE Capital SA | Private equity for lifestyle platforms",
      "description": "Swiss private equity partner supporting leisure, real estate, and digital commerce platforms with patient capital and operational depth.",
      "keywords": [
        "BE Capital",
        "Swiss private equity",
        "lifestyle platforms",
        "family office",
        "long-term capital"
      ],
      "ogTitle": "BE Capital SA",
      "ogDescription": "Swiss private equity partner investing in leisure, living, and commerce platforms with a buy-and-hold mindset."
    }
  },
  "fr": {
    "nav": {
      "navItems": [
        {
          "label": "Services",
          "href": "#services"
        },
        {
          "label": "Approche",
          "href": "#approach"
        },
        {
          "label": "Valeurs",
          "href": "#values"
        }
      ],
      "tagline": "Mandats sur mesure uniquement"
    },
    "hero": {
      "badge": "Société de capital-investissement suisse · Fondée en 2015",
      "title": "Construire des plateformes de style de vie durables avec la précision entrepreneuriale suisse.",
      "description": "BE Capital SA s'associe à des fondateurs visionnaires qui redéfinissent les loisirs, l'immobilier et le commerce digital. Notre héritage entrepreneurial — plus de 2 milliards CHF de valeur créée — nous permet d'investir avec conviction, de soutenir l'excellence opérationnelle et d'accompagner sur plusieurs décennies.",
      "primaryCta": {
        "label": "Notre philosophie d'investissement",
        "href": "#approach"
      },
      "highlights": [
        "Plus de 2,0 Mds CHF de valeur créée",
        "Loisirs · Habitat · Commerce digital",
        "Horizon de détention supérieur à 12 ans"
      ],
      "imageAlt": "Échange entre fondateurs face aux Alpes suisses",
      "logoOpacity": 0.18
    },
    "services": {
      "label": "Thématiques d'investissement",
      "title": "Des mandats ciblés à l'intersection du lifestyle, de l'immobilier et du commerce digital.",
      "description": "Nous prenons des participations de contrôle ou significatives en Europe afin de développer des plateformes via consolidations, croissance organique et programmes d'investissement rigoureux.",
      "items": [
        {
          "title": "Plateformes Loisirs & Hospitality",
          "description": "Nous acquérons et développons des destinations alliant hospitalité, bien-être et expériences sur mesure pour bâtir des écosystèmes lifestyle défendables.",
          "image": {
            "src": "/images/services-leisure.png",
            "alt": "Terrasse d'un resort alpin au coucher du soleil"
          }
        },
        {
          "title": "Immobilier & Actifs réels",
          "description": "Des résidences urbaines aux retraites alpines, nous repositionnons les actifs avec des plans d'investissement pilotés par la donnée afin de créer de nouveaux relais de croissance durable.",
          "image": {
            "src": "/images/services-living.png",
            "alt": "Salon minimaliste avec vue sur un lac suisse"
          }
        },
        {
          "title": "Commerce & Expériences digitales",
          "description": "Nous soutenons des marques omnicanales et leur infrastructure pour relier lieux physiques et parcours digitaux et amplifier l'engagement multi-marchés.",
          "image": {
            "src": "/images/services-digital.png",
            "alt": "Espace de travail premium analysant des données numériques"
          }
        },
        {
          "title": "Patrimoine long terme",
          "description": "Notre capital evergreen autorise un horizon de détention supérieur à 12 ans, intégrant talents opérationnels, gouvernance et succession afin de pérenniser la performance.",
          "image": {
            "src": "/images/buyhold.png",
            "alt": "Dirigeants observant une strat\u00e9gie pluri-d\u00e9cennale dans une salle vitr\u00e9e alpine"
                    }
        }
      ]
    },
    "approach": {
      "label": "Approche",
      "title": "Une intuition entrepreneuriale guidée par une gouvernance disciplinée et patiente.",
      "description": "Nous intégrons allocation de capital, gouvernance et opérations dans un continuum unique. Les décisions sont rapides, informées par la donnée et portées par l'expérience fondatrice.",
      "pillars": [
        {
          "title": "ADN entrepreneurial",
          "detail": "Accès direct à des fondateurs ayant bâti, coté ou cédé des entreprises lifestyle. Nous opérons comme partenaires sur le terrain plutôt que comme capital extérieur."
        },
        {
          "title": "Profondeur opérationnelle",
          "detail": "Des operating partners pilotent expérience client, proptech et croissance omnicanale. Chaque mandat bénéficie d'un sprint de création de valeur sur mesure."
        },
        {
          "title": "Capital patient",
          "detail": "Une structure de bilan qui privilégie le buy & hold. Nous ne recyclons le capital que lorsque la trajectoire stratégique a atteint sa maturité."
        }
      ]
    },
    "values": {
      "label": "Valeurs",
      "title": "Les principes qui guident nos partenariats et une croissance durable.",
      "items": [
        {
          "name": "Esprit entrepreneurial",
          "description": "Construire est notre nature. Nous travaillons aux côtés des équipes pour franchir les étapes clés et maîtriser l'incertitude."
        },
        {
          "name": "Patience disciplinée",
          "description": "Un horizon long terme privilégiant les avantages durables face aux résultats immédiats. La valeur se compose avec rigueur."
        },
        {
          "name": "Alignement capitalistique",
          "description": "Un co-investissement significatif et une gouvernance alignée garantissent une vision partagée."
        },
        {
          "name": "Intuition sectorielle",
          "description": "Des décennies dans les loisirs, l'habitat et le commerce digital guident chaque décision, du concept à l'expansion internationale."
        }
      ]
    },
    "footer": {
      "note": "© {year} BE Capital SA. Tous droits réservés.",
      "attributes": [
        "Suisse",
        "Maison de capital-investissement"
      ],
      "links": [
        {
          "label": "Mentions légales",
          "href": "#"
        },
        {
          "label": "Confidentialité",
          "href": "#"
        }
      ]
    },
    "metadata": {
      "title": "BE Capital SA | Maison de capital-investissement lifestyle",
      "description": "Partenaire suisse de capital-investissement accompagnant les plateformes de loisirs, d'immobilier et de commerce digital avec un capital patient.",
      "keywords": [
        "BE Capital",
        "capital-investissement suisse",
        "plateformes lifestyle",
        "family office",
        "capital patient"
      ],
      "ogTitle": "BE Capital SA",
      "ogDescription": "Maison de capital-investissement suisse dédiée aux plateformes de loisirs, d'habitat et de commerce digital."
    }
  },
  "de": {
    "nav": {
      "navItems": [
        {
          "label": "Leistungen",
          "href": "#services"
        },
        {
          "label": "Ansatz",
          "href": "#approach"
        },
        {
          "label": "Werte",
          "href": "#values"
        }
      ],
      "tagline": "Massgeschneiderte Mandate"
    },
    "hero": {
      "badge": "Schweizer Private-Equity-Haus · Gegründet 2015",
      "title": "Langfristige Lifestyle-Plattformen mit schweizerischer Unternehmerpräzision aufbauen.",
      "description": "BE Capital SA arbeitet mit visionären Gründerinnen und Gründern zusammen, die Freizeit, Immobilien und digitalen Handel neu denken. Unser Gründererbe — über CHF 2 Milliarden geschaffener Wert — ermöglicht entschlossenes Investieren, operative Exzellenz und Begleitung über Jahrzehnte.",
      "primaryCta": {
        "label": "Unsere Investmentphilosophie",
        "href": "#approach"
      },
      "highlights": [
        "Über CHF 2.0 Mrd. geschaffener Wert",
        "Freizeit · Wohnen · Handel",
        "Haltehorizont von über 12 Jahren"
      ],
      "imageAlt": "Gespräch von Entscheidungsträgern mit Blick auf die Schweizer Alpen",
      "logoOpacity": 0.18
    },
    "services": {
      "label": "Investitionsschwerpunkte",
      "title": "Fokussierte Mandate an der Schnittstelle von Lifestyle, Immobilien und digitalem Handel.",
      "description": "Wir übernehmen Mehrheiten und bedeutende Minderheitsbeteiligungen in Europa und skalieren Plattformen durch Roll-ups, organische Wachstumsprogramme und präzise Kapitalplanung.",
      "items": [
        {
          "title": "Freizeit- & Hospitality-Plattformen",
          "description": "Wir erwerben und entwickeln Destinationen, die Hospitality, Wellness und kuratierte Erlebnisse verbinden und so verteidigungsfähige Lifestyle-Ökosysteme schaffen.",
          "image": {
            "src": "/images/services-leisure.png",
            "alt": "Luxuriöse Alpenresort-Terrasse bei Sonnenuntergang"
          }
        },
        {
          "title": "Wohnen & Real Assets",
          "description": "Von urbanen Wohnungen bis zu alpinen Retreats repositionieren wir Immobilien mit datenbasierten Investitionsprogrammen und erschliessen neue Erlösquellen.",
          "image": {
            "src": "/images/services-living.png",
            "alt": "Minimalistisches Penthouse mit Blick auf einen Schweizer See"
          }
        },
        {
          "title": "Digitaler Handel & Erlebnisse",
          "description": "Wir unterstützen Omnichannel-Marken und die notwendige Infrastruktur, um physische Standorte mit digitalen Customer Journeys zu verbinden und Engagement zu skalieren.",
          "image": {
            "src": "/images/services-digital.png",
            "alt": "Premium-Arbeitsplatz mit digitaler Datenanalyse"
          }
        },
        {
          "title": "Langfristige Eigentümerschaft",
          "description": "Unsere Evergreen-Struktur ermöglicht Haltefristen von über 12 Jahren. Operative Talente, Governance und Nachfolgeplanung sichern nachhaltige Performance.",
          "image": {
            "src": "/images/buyhold.png",
            "alt": "F\u00fchrungsteam bespricht mehrdekadige Strategie im verglasten Alpen-Boardroom"
                    }
        }
      ]
    },
    "approach": {
      "label": "Ansatz",
      "title": "Unternehmerischer Instinkt, getragen von disziplinierter, langfristiger Stewardship.",
      "description": "Kapitalallokation, Governance und Betrieb greifen nahtlos ineinander. Entscheidungen sind schnell, datenbasiert und von Gründererfahrung geprägt.",
      "pillars": [
        {
          "title": "Unternehmerische DNA",
          "detail": "Direkter Zugang zu Gründerinnen und Gründern, die Lifestyle-Unternehmen aufgebaut, gelistet oder veräussert haben. Wir agieren als Partner auf Augenhöhe."
        },
        {
          "title": "Operative Tiefe",
          "detail": "Operating Partner orchestrieren Experience Design, PropTech und Omnichannel-Wachstum. Jedes Mandat erhält einen massgeschneiderten Value-Creation-Sprint."
        },
        {
          "title": "Kapital mit Permanenz",
          "detail": "Unsere Bilanzstruktur bevorzugt Buy-and-Hold. Kapital wird erst freigesetzt, wenn die strategische Geschichte vollendet ist."
        }
      ]
    },
    "values": {
      "label": "Werte",
      "title": "Leitprinzipien für Partnerschaften und nachhaltiges Wachstum.",
      "items": [
        {
          "name": "Unternehmerische Entschlossenheit",
          "description": "Wir sind Builder. Gemeinsam mit den Teams navigieren wir Unsicherheit und eröffnen neue Kapitel."
        },
        {
          "name": "Disziplinierte Geduld",
          "description": "Unser langfristiger Blick bevorzugt dauerhafte Vorteile gegenüber kurzfristigen Effekten. Wert wird bedacht komponiert."
        },
        {
          "name": "Abgestimmtes Eigentum",
          "description": "Substanzielles Co-Investment und Governance-Alignment binden Anreize an die strategische Vision."
        },
        {
          "name": "Sektorielle Tiefenschärfe",
          "description": "Jahrzehnte in Freizeit, Wohnen und Handel prägen jede Entscheidung — vom Konzept bis zur internationalen Skalierung."
        }
      ]
    },
    "footer": {
      "note": "© {year} BE Capital SA. Alle Rechte vorbehalten.",
      "attributes": [
        "Schweiz",
        "Private-Equity-Haus"
      ],
      "links": [
        {
          "label": "Impressum",
          "href": "#"
        },
        {
          "label": "Datenschutz",
          "href": "#"
        }
      ]
    },
    "metadata": {
      "title": "BE Capital SA | Private-Equity-Partner für Lifestyle-Plattformen",
      "description": "Schweizer Private-Equity-Haus für Freizeit-, Wohn- und Handelsplattformen mit langfristigem Kapital und operativer Tiefe.",
      "keywords": [
        "BE Capital",
        "Private Equity Schweiz",
        "Lifestyle Plattformen",
        "Family Office",
        "Langfristiges Kapital"
      ],
      "ogTitle": "BE Capital SA",
      "ogDescription": "Schweizer Private-Equity-Partner für Freizeit-, Wohn- und Handelsplattformen mit Buy-and-Hold-Ansatz."
    }
  }
};

export function getDictionary(locale: Locale): LocaleDictionary {
  return dictionaries[locale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

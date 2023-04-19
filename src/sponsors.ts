import { defineConfig, presets } from "../packages/sponsorkit"
import { run } from "../packages/sponsorkit/src/run"

type Lang = 'en' | 'cn'

type Tiers = 'Past Sponsors' | 'Sponsors'

const tierTitles: Record<Lang, Record<Tiers, string>> = {
  'en': {
    'Past Sponsors': 'Past Sponsors',
    'Sponsors': 'Sponsors',
  },
  'cn': {
    'Past Sponsors': '过往赞助者',
    'Sponsors': '赞助者',
  },
}

function getConfig(lang: Lang = 'en', isWide: boolean = false) {
  let name = lang
  if (isWide) {
    name += '.wide'
  }
  const titles = tierTitles[lang]
  return defineConfig({
    outputDir: "./sponsors",
    name,
    width: isWide ? 1800 : 800,
    formats: ["svg", "png"],
    tiers: [
      {
        title: titles['Past Sponsors'],
        monthlyDollars: -1,
        preset: presets.medium
      },
      {
        title: titles['Sponsors'],
        monthlyDollars: 0,
        preset: presets.medium
      }
    ]
  })
}


const configs = [
  getConfig('en', false),
  getConfig('cn', false),
  getConfig('en', true),
  getConfig('cn', true),
]

configs.forEach(async conf => {
  await run(conf)
})

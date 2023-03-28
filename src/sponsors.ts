import { defineConfig, presets } from "../packages/sponsorkit"
import { run } from "../packages/sponsorkit/src/run"

function customConf(cn: boolean, wide: boolean) {
  let name = cn ? 'cn': 'en'
  if (wide) {
    name += '.wide'
  }
  return defineConfig({
    outputDir: "./sponsors",
    name,
    width: wide ? 1800 : 800,
    formats: ["svg", "png"],
    tiers: [
      {
        title: cn ? "过往赞助者": "Past Sponsors",
        monthlyDollars: -1,
        preset: presets.xs
      },
      {
        title: cn ? "赞助者": "Sponsors",
        monthlyDollars: 0,
        preset: presets.medium
      }
    ]
  })
}



const configs = [
  customConf(false, false),
  customConf(false, true),
  customConf(true, false),
  customConf(true, true),
]

configs.forEach(async conf => {
  await run(conf)
})

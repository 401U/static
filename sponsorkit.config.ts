import { defineConfig, presets, tierPresets } from 'sponsorkit'

const tierCn = [
    {
        title: '过往赞助者',
        monthlyDollars: -1,
        preset: tierPresets.base,
    },
    {
        title: '赞助者',
        preset: tierPresets.medium,
    },
]

const tierEn = [
    {
        title: 'Past Sponsors',
        monthlyDollars: -1,
        preset: tierPresets.base,
    },
    {
        title: 'Sponsors',
        monthlyDollars: 0,
        preset: tierPresets.medium,
    },
]

export default defineConfig({
  outputDir: './sponsors',
  formats: ['svg', 'png'],
  renderer: 'tiers',
  includePastSponsors: true,
  renders: [
    {
        name: 'en.wide',
        width: 1800,
        tiers: tierEn,
    },
    {
        name: 'en',
        width: 800,
        tiers: tierEn,
    },
    {
        name: 'cn',
        width: 800,
        tiers: tierCn,
    },
    {
        name: 'cn.wide',
        width: 1800,
        tiers: tierCn,
    },
    {
        name: 'circle',
        width: 800,
        renderer: 'circles'
    },
    {
        name: 'circle.wide',
        width: 1800,
        renderer: 'circles'
    }
  ]
})
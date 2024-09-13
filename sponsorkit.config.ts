import { defineConfig, presets } from 'sponsorkit'

const tierCn = [
    {
        title: '过往赞助者',
        monthlyDollars: -1,
        preset: presets.medium,
    },
    {
        title: '赞助者',
        preset: presets.medium,
    },
]

const tierEn = [
    {
        title: 'Past Sponsors',
        monthlyDollars: -1,
        preset: presets.medium,
    },
    {
        title: 'Sponsors',
        monthlyDollars: 0,
        preset: presets.medium,
    },
]

export default defineConfig({
  outputDir: './sponsors',
  formats: ['svg', 'png', 'json'],
  renderer: 'tiers',
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
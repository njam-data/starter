const gulp = require('gulp')
const browserSync = require('browser-sync')

const fsbx = require('fuse-box')
const configDev = require('../fusebox.config.dev.js')
const configDist = require('../fusebox.config.dist.js')

gulp.task('js-dev', (cb) => {
	const fuse = fsbx.FuseBox.init(configDev)
	const bundles = {
		'dev/bundle.js': '> entry.js',
		'dev/critical.js': '> critical.js',
	}
	fuse.bundle(bundles, (err) => {
		if (err) console.log(err)
		browserSync.reload()
		cb()
	})
})

gulp.task('js-dist', (cb) => {
	const fuse = fsbx.FuseBox.init(configDist)
	const bundles = {
		'dev/bundle.js': '> entry.js',
		'.tmp/critical.js': '> critical.js',
	}
	fuse.bundle(bundles, (err) => {
		if (err) console.log(err)
		cb()
	})
})
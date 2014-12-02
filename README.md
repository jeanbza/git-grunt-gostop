# git-grunt-gostop v0.1.1

[![Build Status](https://travis-ci.org/jadekler/git-grunt-gostop.svg)](https://travis-ci.org/jadekler/git-grunt-gostop)

> Stop Running Go programs



## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install git-grunt-gostop --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('git-grunt-gostop');
```

*This plugin was designed to work with Grunt 0.4.x. If you're still using grunt v0.3.x it's strongly recommended that [you upgrade](http://gruntjs.com/upgrading-from-0.3-to-0.4), but in case you can't please use [v0.3.2](https://github.com/gruntjs/grunt-contrib-cssmin/tree/grunt-0.3-stable).*

For a working example of git-grunt-gorun and git-grunt-gostop, check out [this branch of git-go-websiteskeleton](https://github.com/jadekler/git-go-websiteskeleton/tree/grunt). Also check out [gorun](https://github.com/jadekler/git-grunt-gorun) and [gobuild](https://github.com/jadekler/git-grunt-gobuild) for other go/grunt modules.


## Gostop task
_Run this task with the `grunt gostop` command._

Stop Go programs inline as a Grunt task.
### Options

###### src
Set to your go file with func main().
### Usage Examples

#### Basic compilation

```javascript
gostop: {
}
```

## Release History

 * 2014-10-13   v0.1.1   Updated readme with related projects and example.
 * 2014-10-13   v0.1.0   Initial commit with basic functionality - Go Stop.

---

Task submitted by [Jean de Klerk](jeandeklerk.com)

*This file was generated on Tue Dec 02 2014 14:22:19.*

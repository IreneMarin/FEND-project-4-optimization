module.exports = function(grunt) {

    // Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-html');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-responsive-images');
    
    // Where we configure each plug-in
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // clean and create the folders that we use for the "new" files for the tasks
        clean: {
            dev: {
                src: ['img/build'],
            },
        },

        mkdir: {
            dev: {
                options: {
                    create: ['img/build']
                },
            },
        },
        
        // to lint javascript (validate and detect errors) 
        jshint: {
	       all: [
		      'Gruntfile.js',
		      'js/*.js'
	       ]
        },
        
        // to lint css (validate and detect errors)
        csslint: {            
            lax: {
                options: {
                    import: false
                },
                src: ['css/*.css']
            }
        },
        
        // to lint html (validate and detect errors)
        htmllint: {
            all: {
                options: {
                    force: true
                },
                src: ["*.html"]
            }
        },
        
        // to minify javascript
        uglify: {
            build: {
                src: 'js/perfmatters.js',
                dest: 'js/perfmatters.min.js'
            }
        },
        
        // to minify all css from the "css" folder, adding the .min extension        
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },
        
        // to resize images
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        width: 116,
                        quality: 60
                    }]
                },

                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png,JPG,PNG}'],
                    cwd: 'img/',
                    dest: 'img/'
                }]
            }
        },
        
        // to optimize our images
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/build/'
                }]
            }
        }
        
    });
    
    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', [
        'clean',
        'mkdir',
        'jshint',
        'csslint',
        'htmllint',
        'uglify',
        'cssmin',
        'responsive_images',
        'imagemin'
    ]);
};
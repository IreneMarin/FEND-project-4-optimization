module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    
    // Where we configure each plug-in
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // clean and create the folders that we use for the new files (images) for the tasks
        clean: {
            dev: {
                src: ['views/images/opt', 'img/opt'],
            },
        },

        mkdir: {
            dev: {
                options: {
                    create: ['views/images/opt', 'img/opt']
                },
            },
        },
        
        // lint javascript (validate and detect errors) 
        jshint: {
	       all: {
               options: {
                   force: true
               },
               src: ['Gruntfile.js', 'js/*.js', 'views/js/*.js']
           }
        },
        
        // lint css (validate and detect errors)
        csslint: {            
            lax: {
                options: {
                    import: false
                },
                src: ['css/*.css', 'views/css/*css']
            }
        },
        
        // lint html (validate and detect errors)
        htmllint: {
            all: {
                options: {
                    force: true
                },
                src: ['*.html', 'views/pizza.html']
            }
        },
        
        // minify javascript
        uglify: {
            build: {
                src: 'js/perfmatters.js',
                dest: 'js/perfmatters.min.js'
            }
        },
        
        // minify all css from the "css" folder, adding the .min extension        
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                },{
                    expand: true,
                    cwd: 'views/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'views/css',
                    ext: '.min.css'
                }]
            }
        },
        
        // resize images from pizza
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
                    cwd: 'views/images/',
                    dest: 'views/images/'
                }]
            }
        },
        
        // optimize images from pizza
        imagemin: {
            static: {
                options: {
                    optimizationLevel: 3      
                },
                files: {
                    'views/images/opt/pizza-116.png': 'views/images/pizza-116.png',
                    'views/images/opt/pizzeria-116.jpg': 'views/images/pizzeria-116.jpg',
                    'img/opt/profilepic.jpg': 'img/profilepic.jpg'
                }
            }
        }
        
    });
    
    // Where we tell Grunt what to do when we type "grunt" into the terminal
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
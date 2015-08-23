module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    
    // Where we configure each plug-in
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // clean and create the folders that we use for the new files (images) for the tasks
        clean: {
            dev: {
                src: ['dist/img', 'dist/css', 'dist/js', 'dist/views/css', 'dist/views/images', 'dist/views/js'],
            },
        },
        mkdir: {
            dev: {
                options: {
                    create: ['dist/img', 'dist/css', 'dist/js', 'dist/views/css', 'dist/views/images', 'dist/views/js']
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
                files: {
                    'dist/js/perfmatters.min.js': ['js/perfmatters.js'],
                    'dist/views/js/main.min.js': ['views/js/main.js']
                } 
            }
        },
        
        // minify all css from the "css" folder, adding the .min extension        
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                },{
                    expand: true,
                    cwd: 'views/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/views/css',
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
                        width: 77,
                        quality: 60
                    },{
                        width: 116,
                        quality: 60
                    },{
                        width: 232,
                        quality: 60
                    },{
                        width: 720,
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
                    'dist/views/images/pizza-77.png': 'views/images/pizza-77.png',
                    'dist/views/images/pizza-232.png': 'views/images/pizza-232.png',
                    'dist/views/images/pizzeria-116.jpg': 'views/images/pizzeria-116.jpg',
                    'dist/views/images/pizzeria-720.jpg': 'views/images/pizzeria-720.jpg',
                    'dist/img/profilepic.jpg': 'img/profilepic.jpg'
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
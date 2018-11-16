/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(() => {


    /* A test suite "RSS Feeds" */

    
    describe('RSS Feeds',()=>{

        /* A test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */

        it('are defined',()=>{
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('URL defined',()=>{

            allFeeds.forEach((feed)=>{
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('name defined',()=>{

            allFeeds.forEach((feed)=>{
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });
    

    /* A test suite "The menu" */

    
    describe('The menu',()=>{

        /* A test that ensures the menu element is
         * hidden by default. 
         */
         let body = $('body');

        it('menu hidden',()=>{

            expect(body.hasClass('menu-hidden')).toBe(true);

        });

        /* A test that ensures the menu changes
         * visibility when the menu icon is clicked. 
         */

        it('click event changes visibility',()=>{
            $(".menu-icon-link").trigger('click');
            expect(body.hasClass('menu-hidden')).toEqual(false);
            $(".menu-icon-link").trigger('click');
            expect(body.hasClass('menu-hidden')).toEqual(true);
        });
    });


    /* test suite "Initial Entries" */


    describe('Initial Entries', function () {


        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

        beforeEach((done)=>{
            loadFeed(0,done);
            
        });

        it('check if more than 0 entries',()=> {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });

    });

    /* test suite "New Feed Selection" */


    describe('New Feed Selection',()=>{

        /* test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        
    let oldFeed;
    let newFeed;
        
    beforeEach((done)=>{
        
        loadFeed(0,()=>{
            oldFeed = $('.feed').html();
        
            loadFeed(1,()=>{
                newFeed = $('.feed').html();
                done();
                });
            });
        });
        
        it('compares initial and new feeds',()=>{
                expect(oldFeed).not.toBe(newFeed);
            });
        }); 
    });
//Dont change it
requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $) {
        function buttonsCanvas(dom, input) {
            const attr = {
                line: {
                    thin: {
                        'stroke': '#6FB3DE',
                        "stroke-width": 0.5,
                    },
                    wide: {
                        'stroke': '#006CA9',
                        "stroke-width": 2,
                    },
                },
                number: {
                    zero: {
                        'stroke': 'darkblue',
                        "stroke-width": 0,
                        'fill': 'skyblue',
                        'font-size': '18px',
                        'font-family': 'robot',
                    },
                    n: {
                        "stroke-width": 0,
                        'fill': '#006CA9',
                        'font-size': '18px',
                        'font-family': 'helvetica',
                    },
                },
                button: {
                    'stroke': '#6FB3DE',
                    "stroke-width": 0.5,
                    'fill': 'orange',
                },
            };

            /*----------------------------------------------*
             *
             * the buttons
             *
             *----------------------------------------------*/
            const SIZE = 25; 
            const os = 32;

            const mz =input.split('\n').filter(x=>x.length);
            const [w, h] = [mz[0].length, mz.length];

            const paper = Raphael(
                dom, SIZE*(w)+os*2, SIZE*(h)+os*2, 0, 0);

            const ps1 = paper.set();

            for (let r=0; r < h; r += 1) {
                for (let c=0; c < w; c += 1) {
                    paper.rect(c*SIZE+os, r*SIZE+os, SIZE, SIZE).attr(
                        mz[r][c] !== '0' ? attr.button: attr.line.thin);
                    paper.text(c*SIZE+os+13, r*SIZE+os+13, mz[r][c]).attr(
                        mz[r][c] !== '0' ? attr.number.n: attr.number.zero);
                }
            }

            const ps2 = paper.set();
            for (let r=0; r < h; r += 1) {
                for (let c=0; c < w; c += 1) {
                    if (mz[r][c] !== '0') {
                        // top
                        if (r === 0 || mz[r-1][c] === '0')
                            ps2.push(paper.path(
                                'M'+ (c*SIZE+os) +',' + (r*SIZE+os) +' l'
                                    + (SIZE) + ',0')
                            );
                        // bottom
                        if (r === h-1 || mz[r+1][c] === '0')
                            ps2.push( paper.path(
                                'M' + (c*SIZE+os) + ',' + ((r+1)*SIZE+os)
                                    + ' l' + (SIZE) + ',0')
                            );
                        // left
                        if (c === 0 || mz[r][c-1] === '0')
                            ps2.push(paper.path(
                                'M' + (c*SIZE+os) + ',' + (r*SIZE+os)
                                    + ' l0,' + (SIZE))
                            );
                        // right
                        if (c === w-1 || mz[r][c+1] === '0')
                            ps2.push(paper.path(
                                'M' + ((c+1)*SIZE+os) + ','
                                    + (r*SIZE+os) + ' l0,' + (SIZE))
                            );
                    }
                }
                ps1.attr(attr.button);
                ps2.attr(attr.line.wide);
            }
        }
        
        var $tryit;

        var io = new extIO({
            multipleArguments: false,
            functions: {
                python: 'buttons',
                js: 'buttons'
            },
            animation: function($expl, data){
                buttonsCanvas($expl[0], data.in);
            }
        });
        io.start();
    }
);

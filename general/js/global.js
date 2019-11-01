
                            $(document).ready(function() {
                            $('#pg').particleground({
                            dotColor: '#f7f1e3',
                            lineColor: '#f7f1e3',
                            directionY: 'up',
                            density: '40000'
                            });
                            });

                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'UA-136717648-1');

                            var modal = document.getElementById('id01');
                            window.onclick = function(event) {
                            if (event.target == modal) {
                            modal.style.display = "none";
                            }
                            }

                            $(window).on("load",function() {

                                   $(".loader-wrapper").fadeOut("slow");
                            });
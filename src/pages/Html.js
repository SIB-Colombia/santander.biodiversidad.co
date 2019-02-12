import React from 'react';

const Html = ({ content, client: { cache } }) => (
<html lang="es">
<head>
    <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400,400i,500,700" rel="stylesheet">
                    <link rel="shortcut icon"  href="./favicon.ico" />
                    <!-- Global site tag (gtag.js) - Google Analytics -->
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-120994855-6"></script>
                    <script>
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'UA-120994855-6');
                    </script>
                    <title>Ventana Regional Santander</title>
</head>
<body>
<div id="app"></div>
<script src="/ssr/app.js"></script>
</body>
</html>

);

export default Html;
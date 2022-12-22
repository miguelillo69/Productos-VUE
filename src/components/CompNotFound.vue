<template>

    <body>

        <div class="error-container">
            <h1>4<img id="pirata" src="../assets/pirata.png">4</h1>
            <h2>Te has perdido y no sabes donde has llegado...</h2>
            <h5>pulsa en el MAPA</h5>
            <router-link class="nav-link" to="/"><img id="mapa" src="../assets/isla.png" title="mapa"></router-link>
        </div>

    </body>

</template>
<style>
.error-container {
    text-align: center;
    height: 100%;
    font-family: "Whitney SSm A", "Whitney SSm B", "Helvetica Neue", Helvetica, Arial, Sans-Serif;
    background-color: #2D72D9;
    color: #fff;
    -moz-font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    height: 1000px;
}

@media (max-width: 480px) {
    .error-container {
        position: relative;
        top: 15%;
        height: initial;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
}

.error-container h1 {
    margin: 0;
    font-size: 130px;
    font-weight: 300;
    text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.7);

}

@media (min-width: 480px) {
    .error-container h1 {
        position: relative;
        top: 15%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
}

@media (min-width: 768px) {
    .error-container h1 {
        font-size: 220px;
    }
}

.return {
    color: rgba(255, 255, 255, 0.6);
    font-weight: 400;
    letter-spacing: -0.04em;
    margin: 0;
}

@media (min-width: 480px) {
    .return {
        position: absolute;
        width: 100%;
        bottom: 30px;
    }
}

#mapa {
    margin-top: -10px;
    width: 30%;
    filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.7));
}

#pirata {
    width: 120px;
    height: 170px;
    filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.7));
    margin-bottom: 35px;
}
</style>
<template>
  <div class="row">
    <div class="column">
      <table class="table table-stripped">
        <tr>
          <td style="text-align: center; vertical-align: middle">
            <img
              src="img/stats/can.png"
              style="width: 80%; opacity: 0.4; filter: alpha(opacity=40)"
            />
          </td>
          <td style="text-align: left">
            <h1 class="stat" style="color: var(--green-900)">200+</h1>
            <p class="content-description pDetail">Lata</p>
          </td>
        </tr>
      </table>
    </div>

    <div class="column">
      <table class="table table-stripped">
        <tr>
          <td style="text-align: center; vertical-align: middle">
            <img
              src="img/stats/bottle.png"
              style="width: 80%; opacity: 0.4; filter: alpha(opacity=40)"
            />
          </td>
          <td>
            <h1 class="stat" style="color: #337ab7">200+</h1>
            <p class="content-description pDetail">Botella</p>
          </td>
        </tr>
      </table>
    </div>
    <div class="column">
      <table class="table table-stripped">
        <tr>
          <td style="text-align: center; vertical-align: middle">
            <img
              src="img/stats/paper.png"
              style="width: 70%; opacity: 0.4; filter: alpha(opacity=40)"
            />
          </td>
          <td>
            <h1 class="stat" style="color: #ffc107">200+</h1>
            <p class="content-description pDetail">Papel</p>
          </td>
        </tr>
      </table>
    </div>
    <div class="column">
      <table class="table table-stripped">
        <tr>
          <td style="text-align: center; vertical-align: middle">
            <img
              src="img/stats/beam.png"
              style="width: 70%; opacity: 0.4; filter: alpha(opacity=40)"
            />
          </td>
          <td>
            <h1 class="stat" style="color: #dc3545">200+</h1>
            <p class="content-description pDetail">Hierro</p>
          </td>
        </tr>
      </table>
    </div>
    <div class="column">
      <table class="table table-stripped">
        <tr>
          <td style="text-align: center; vertical-align: middle">
            <img
              src="img/stats/open-box.png"
              style="width: 70%; opacity: 0.4; filter: alpha(opacity=40)"
            />
          </td>
          <td>
            <h1 class="stat" style="color: #0d6efd">200+</h1>
            <p class="content-description pDetail">Cartón</p>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
.pDetail {
  color: #000;
}
.stat {
  font-size: 4rem;
}
.chartIcon {
  font-size: var(--title-counter);
  color: var(--green-200);
}

* {
  box-sizing: border-box;
}

.row {
  margin-left: -5px;
  margin-right: -5px;
}

.column {
  float: left;
  width: 20%;
  padding: 5px;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th,
td {
  padding: 16px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>

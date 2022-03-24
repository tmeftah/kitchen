<script>
  let breite = 558.4;
  let tiefe = 718.4;
  let space = 10;
  // NUT
  let haveNut = true;
  let nutAbsatz = 44;
  let ntiefe = 5;
  let nbreite = 6;
  let ndurch = true;
  let nabstand = 10;
  $: nhoehe = ndurch ? tiefe : tiefe - nabstand;

  // Bohrung Unten
  let buXabstand = 8.2;
  let bubdurchmesser = 8;
  let bubabstand = 29.2;
  let bupdurchmesser = 7;
  let bupabstand = 80;
  let bupanzahl = 3;
  $: bupabstandzwichen =
    (breite - 2 * bubabstand - 2 * bupabstand) / (bupanzahl - 1);

  // Latte
  let LatteAnzahl = 2;
  $: LatteAbstand = bubabstand;
  let LatteBohrungAbstand = 44;
  $: LatteBohrungD1 = bubdurchmesser;
  $: LatteBohrungD2 = bupdurchmesser;
  $: LatteabstandzwichenD1 = (breite - 2 * bubabstand) / (LatteAnzahl - 1);
  $: LatteabstandzwichenD2 =
    (breite - 2 * bubabstand - 2 * LatteBohrungAbstand) / (LatteAnzahl - 1);
</script>

<div class="container mt-3">
  <div class="row">
    <div class="col-md-2">
      <label for="breite" class="form-label">Breite</label>
      <div class="input-group input-group-sm">
        <input
          class="form-control"
          type="number"
          name="breite"
          id=""
          placeholder="Breite.."
          bind:value="{breite}"
          max="200"
        />
      </div>

      <label for="tiefe" class="form-label mt-2">Tiefe</label>
      <div class="input-group input-group-sm">
        <input
          class="form-control"
          type="number"
          name="tiefe"
          id=""
          placeholder="Tiefe.."
          bind:value="{tiefe}"
        />
      </div>

      <label for="buXabstand" class="form-label mt-2"
        >Bohrung Abstand von Rand</label
      >
      <div class="input-group input-group-sm">
        <input
          class="form-control"
          type="number"
          name="buXabstand"
          id=""
          placeholder="Bohrung Abstand von Rand..."
          bind:value="{buXabstand}"
        />
      </div>

      <!-- Nut -->
      <hr />
      <a
        class="btn bg-dark text-warning text-start mb-3 w-100 "
        data-bs-toggle="collapse"
        href="#nutForm"
        role="button"
        aria-expanded="false"
        aria-controls="nutForm"
      >
        Nut
      </a>

      <div class="collapse  card" id="nutForm">
        <div class="card-header">Einstellung</div>
        <div class="card-body">
          <div class="form-check mb-2">
            <div class="input-group input-group-sm ">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="haveNut"
                bind:checked="{haveNut}"
              />
              <label class="form-check-label ms-1" for="flexCheckDefault">
                Aktiv
              </label>
            </div>
          </div>
          {#if haveNut}
            <label for="tiefe" class="form-label">Absatz</label>
            <div class="input-group input-group-sm ">
              <input
                class="form-control"
                type="number"
                name="nutAbsatz"
                id=""
                placeholder="Absatz.."
                bind:value="{nutAbsatz}"
              />
            </div>

            <label for="nbreite" class="form-label">Breite</label>
            <div class="input-group input-group-sm ">
              <input
                class="form-control"
                type="number"
                name="nbreite"
                id=""
                placeholder="Breite.."
                bind:value="{nbreite}"
              />
            </div>

            <label for="ntiefe" class="form-label">Tiefe</label>
            <div class="input-group input-group-sm ">
              <input
                class="form-control"
                type="number"
                name="ntiefe"
                id=""
                placeholder="Nut Tief.."
                bind:value="{ntiefe}"
              />
            </div>

            <hr />
            <div class="form-check">
              <div class="input-group input-group-sm ">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="ndurch"
                  bind:checked="{ndurch}"
                />
                <label class="form-check-label ms-1" for="flexCheckghfDefault">
                  Durchgehend?
                </label>
              </div>
            </div>

            <label for="ntiefe" class="form-label">Abstand</label>
            <div class="input-group input-group-sm ">
              <input
                class="form-control"
                type="number"
                name="nabstand"
                id=""
                placeholder="Nut Abstand.."
                bind:value="{nabstand}"
                disabled="{ndurch}"
              />
            </div>
          {/if}
        </div>
      </div>

      <!-- Bohrung unten -->

      <a
        class="btn bg-dark text-warning text-start mb-3 w-100 "
        data-bs-toggle="collapse"
        href="#BohrungUntenForm"
        role="button"
        aria-expanded="false"
        aria-controls="BohrungUntenForm"
      >
        Bohrung Unten
      </a>

      <div class="collapse card" id="BohrungUntenForm">
        <div class="card-body">
          <div class="card mb-3">
            <div class="card-header">Befestigung (2 Mal)</div>
            <div class="card-body">
              <label for="breite" class="form-label">Durchmesser</label>
              <div class="input-group input-group-sm ">
                <input
                  class="form-control"
                  type="number"
                  name="bubdurchmesser"
                  id=""
                  placeholder="Breite.."
                  bind:value="{bubdurchmesser}"
                  max="200"
                />
              </div>

              <label for="breite" class="form-label">Abstand</label>
              <div class="input-group input-group-sm ">
                <input
                  class="form-control"
                  type="number"
                  name="bubabstand"
                  id=""
                  placeholder="Breite.."
                  bind:value="{bubabstand}"
                  max="200"
                />
              </div>
            </div>
          </div>
          <div class="card ">
            <div class="card-header">PINs</div>
            <div class="card-body">
              <label for="bupdurchmesser" class="form-label">Durchmesser</label>
              <div class="input-group input-group-sm ">
                <input
                  class="form-control"
                  type="number"
                  name="bupdurchmesser"
                  id=""
                  placeholder="bupdurchmesser.."
                  bind:value="{bupdurchmesser}"
                  max="200"
                />
              </div>

              <label for="bupabstand" class="form-label">Abstand</label>
              <div class="input-group input-group-sm ">
                <input
                  class="form-control"
                  type="number"
                  name="bupabstand"
                  id=""
                  placeholder="bupabstand.."
                  bind:value="{bupabstand}"
                  max="200"
                />
              </div>

              <label for="bupanzahl" class="form-label">Anzahl</label>
              <div class="input-group input-group-sm ">
                <input
                  class="form-control"
                  type="number"
                  name="bupanzahl"
                  id=""
                  placeholder="bupanzahl.."
                  bind:value="{bupanzahl}"
                  max="200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bohrung Oben-->
      <a
        class="btn bg-dark text-warning text-start mb-3 w-100 "
        data-bs-toggle="collapse"
        href="#BohrungObenForm"
        role="button"
        aria-expanded="false"
        aria-controls="BohrungObenForm"
      >
        Latte
      </a>

      <div class="collapse card " id="BohrungObenForm">
        <div class="card-body">
          <label for="LatteAnzahl" class="form-label">Anzahl</label>
          <div class="input-group input-group-sm ">
            <div class="input-group input-group-sm ">
              <input
                class="form-control "
                type="number"
                name="LatteAnzahl"
                id=""
                placeholder="Anzahl.."
                bind:value="{LatteAnzahl}"
                max="4"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-9" style="height: 70vh;">
      <svg class="svg" viewBox="0 0 1500 800">
        <!-- links -->
        <rect
          x="{space}"
          y="{space}"
          width="{breite}"
          height="{tiefe}"
          style="fill:orange;stroke:black;stroke-width:1;fill-opacity:0.1;stroke-opacity:1;"
        ></rect>

        <!-- Nut -->
        {#if haveNut}
          <rect
            x="{nutAbsatz + space}"
            y="{space}"
            width="{nbreite}"
            height="{nhoehe}"
            style="fill:white;stroke:black;stroke-width:1;fill-opacity:1;stroke-opacity:1"
          ></rect>
        {/if}

        <!-- Bohrung Unten -->

        <circle
          cx="{space + bubabstand}"
          cy="{tiefe + space - buXabstand}"
          r="{bubdurchmesser / 2}"
          style="fill:white;stroke:black;stroke-width:1;fill-opacity:1;stroke-opacity:0.9"
        ></circle>

        <circle
          cx="{space + breite - bubabstand}"
          cy="{tiefe + space - buXabstand}"
          r="{bubdurchmesser / 2}"
          style="fill:white;stroke:black;stroke-width:1;fill-opacity:1;stroke-opacity:0.9"
        ></circle>

        {#each Array(bupanzahl) as _, i}
          <circle
            cx="{space + bubabstand + bupabstand + bupabstandzwichen * i}"
            cy="{tiefe + space - buXabstand}"
            r="{bupdurchmesser / 2}"
            style="fill:white;stroke:black;stroke-width:1;fill-opacity:1;stroke-opacity:0.9"
          ></circle>
        {/each}

        <!-- Bohrung Oben -->

        {#each Array(LatteAnzahl) as _, i}
          <circle
            cx="{space + LatteAbstand + LatteabstandzwichenD1 * i}"
            cy="{space + buXabstand}"
            r="{LatteBohrungD1 / 2}"
            style="fill:white;stroke:black;stroke-width:1;fill-opacity:1;stroke-opacity:0.9"
          ></circle>
          <circle
            cx="{space +
              LatteAbstand +
              LatteBohrungAbstand +
              LatteabstandzwichenD2 * i}"
            cy="{space + buXabstand}"
            r="{LatteBohrungD2 / 2}"
            style="fill:white;stroke:black;stroke-width:1;fill-opacity:1;stroke-opacity:0.9"
          ></circle>
        {/each}

        <text
          x="{space + breite / 2}"
          y="{space + tiefe / 2}"
          font-size="5em"
          fill="#fcba03">1</text
        >

        <!-- second side -->

        <!-- rechts -->
        <rect
          x="{breite + 2 * space}"
          y="{space}"
          width="{breite}"
          height="{tiefe}"
          style="fill:orange;stroke:black;stroke-width:1;fill-opacity:0.1;stroke-opacity:0.9;"
        ></rect>

        <!-- Nut -->
        {#if haveNut}
          <rect
            x="{2 * space + 2 * breite - nutAbsatz - nbreite}"
            y="{space}"
            width="{nbreite}"
            height="{nhoehe}"
            style="fill:white;stroke:black;stroke-width:1;fill-opacity:1;stroke-opacity:0.9"
          ></rect>
        {/if}

        <!--  -->

        <circle
          cx="{2 * space + 2 * breite - bubabstand}"
          cy="{tiefe + space - buXabstand}"
          r="{bubdurchmesser / 2}"
          style="fill:white;stroke:black;stroke-width:1;fill-opacity:1;stroke-opacity:0.9"
        ></circle>

        <circle
          cx="{2 * space + breite + bubabstand}"
          cy="{tiefe + space - buXabstand}"
          r="{bubdurchmesser / 2}"
          style="fill:white;stroke:black;stroke-width:1;fill-opacity:1;stroke-opacity:0.9"
        ></circle>

        {#each Array(bupanzahl) as _, i}
          <circle
            cx="{2 * space +
              bubabstand +
              breite +
              bupabstand +
              bupabstandzwichen * i}"
            cy="{tiefe + space - buXabstand}"
            r="{bupdurchmesser / 2}"
            style="fill:white;stroke:black;stroke-width:1;fill-opacity:1;stroke-opacity:0.9"
          ></circle>
        {/each}

        <!-- Bohrung Oben -->

        {#each Array(LatteAnzahl) as _, i}
          <circle
            cx="{2 * space + breite + LatteAbstand + LatteabstandzwichenD1 * i}"
            cy="{space + buXabstand}"
            r="{LatteBohrungD1 / 2}"
            style="fill:white;stroke:black;stroke-width:1;fill-opacity:1;stroke-opacity:0.9"
          ></circle>
          <circle
            cx="{2 * space +
              breite +
              LatteAbstand +
              LatteBohrungAbstand +
              LatteabstandzwichenD2 * i}"
            cy="{space + buXabstand}"
            r="{LatteBohrungD2 / 2}"
            style="fill:white;stroke:black;stroke-width:1;fill-opacity:1;stroke-opacity:0.9"
          ></circle>
        {/each}
        <text
          x="{space + 1.5 * breite}"
          y="{space + tiefe / 2}"
          font-size="5em"
          fill="#fcba03">2</text
        >

        Sorry, your browser does not support inline SVG.
      </svg>
    </div>
  </div>
</div>

<style>
  .svg {
    border: 1px solid #c0c0c0;
  }
</style>

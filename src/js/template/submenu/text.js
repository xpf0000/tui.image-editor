export default `
    <ul class="menu">
        <li id="text-effect-button">
            <div class="button bold">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="../dist/icon-a.svg#icon-a-ic-text-bold" class="normal"/>
                        <use xlink:href="../dist/icon-b.svg#icon-b-ic-text-bold" class="active"/>
                    </svg>
                </div>
                <label> Bold </label>
            </div>
            <div class="button italic">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="../dist/icon-a.svg#icon-a-ic-text-italic" class="normal"/>
                        <use xlink:href="../dist/icon-b.svg#icon-b-ic-text-italic" class="active"/>
                    </svg>
                </div>
                <label> Italic </label>
            </div>
            <div class="button underline">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="../dist/icon-a.svg#icon-a-ic-text-underline" class="normal"/>
                        <use xlink:href="../dist/icon-b.svg#icon-b-ic-text-underline" class="active"/>
                    </svg>
                </div>
                <label> Underline </label>
            </div>
        </li>
        <li>
            <div class="tui-image-editor-partition"></div>
        </li>
        <li id="text-align-button">
            <div class="button left">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="../dist/icon-a.svg#icon-a-ic-text-align-left" class="normal"/>
                        <use xlink:href="../dist/icon-b.svg#icon-b-ic-text-align-left" class="active"/>
                    </svg>
                </div>
                <label> left </label>
            </div>
            <div class="button center">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="../dist/icon-a.svg#icon-a-ic-text-align-center" class="normal"/>
                        <use xlink:href="../dist/icon-b.svg#icon-b-ic-text-align-center" class="active"/>
                    </svg>
                </div>
                <label> center </label>
            </div>
            <div class="button right">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="../dist/icon-a.svg#icon-a-ic-text-align-right" class="normal"/>
                        <use xlink:href="../dist/icon-b.svg#icon-b-ic-text-align-right" class="active"/>
                    </svg>
                </div>
                <label> right </label>
            </div>
        </li>
        <li>
            <div class="tui-image-editor-partition"></div>
        </li>
        <li>
            <div id="text-color" title="Color"></div>
        </li>
        <li class="newline tui-image-editor-range-wrap">
            <label>Text size</label>
            <div id="text-range"></div>
            <input id="text-range-value" class="tui-image-editor-range-value" value="0" />
        </li>
    </ul>
`;

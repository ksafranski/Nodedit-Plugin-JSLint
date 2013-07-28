<div id="jslint-config">
    <table>
        {{#eachkeys data}}
        <tr>
            <td>{{jslintLabel key}}</td>
            <td>
                <select name="{{key}}">
                    <option value="true">True</option>
                    <option {{#if value}} {{else}} selected="selected" {{/if}} value="false">False</option>
                </select>
            </td>    
        </tr>
        {{/eachkeys}}
    </table>
</div>

<div id="jslint-output"></div>

<hr>

<div id="jslint-globals">
    <label>Specify Globals</label>
    <input type="text" placeholder="window,jQeury,..."></input>
</div>

<button id="run-lint">Lint Code</button>
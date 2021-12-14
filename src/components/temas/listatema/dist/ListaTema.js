"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var core_1 = require("@material-ui/core");
require("./ListaTema.css");
var react_use_localstorage_1 = require("react-use-localstorage");
var react_router_dom_2 = require("react-router-dom");
var Service_1 = require("../../../services/Service");
function ListaTema() {
    var _a = react_1.useState([]), temas = _a[0], setTemas = _a[1];
    var token = react_use_localstorage_1["default"]('token')[0];
    var history = react_router_dom_2.useHistory();
    react_1.useEffect(function () {
        if (token !== '') {
            alert("Você precisa estar logado");
            history.push("/login");
        }
    }, [history, token]);
    function getTema() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Service_1.busca("/tema", setTemas, {
                            headers: {
                                'Authorization': token
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    react_1.useEffect(function () {
        getTema();
    }, [temas.length]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null, temas.map(function (tema) { return (react_1["default"].createElement(core_1.Box, { m: 2 },
        react_1["default"].createElement(core_1.Card, { variant: "outlined" },
            react_1["default"].createElement(core_1.CardContent, null,
                react_1["default"].createElement(core_1.Typography, { color: "textSecondary", gutterBottom: true }, "Tema"),
                react_1["default"].createElement(core_1.Typography, { variant: "h5", component: "h2" }, tema.descricao)),
            react_1["default"].createElement(core_1.CardActions, null,
                react_1["default"].createElement(core_1.Box, { display: "flex", justifyContent: "center", mb: 1.5 },
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/formularioTema/" + tema.id, className: "text-decorator-none" },
                        react_1["default"].createElement(core_1.Box, { mx: 1 },
                            react_1["default"].createElement(core_1.Button, { variant: "contained", className: "marginLeft", size: 'small', color: "primary" }, "atualizar"))),
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/deletarTema/" + tema.id, className: "text-decorator-none" },
                        react_1["default"].createElement(core_1.Box, { mx: 1 },
                            react_1["default"].createElement(core_1.Button, { variant: "contained", size: 'small', color: "secondary" }, "deletar")))))))); })));
}
exports["default"] = ListaTema;

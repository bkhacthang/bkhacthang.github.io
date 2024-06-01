import{t as I,m as N}from"./text-diff-27581534.js";import"./index-2bcc7c92.js";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.43.0(94c055bcbdd49f04a0fa15515e848542a79fb948)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var T=Object.defineProperty,M=Object.getOwnPropertyDescriptor,R=Object.getOwnPropertyNames,K=Object.prototype.hasOwnProperty,E=(e,t,s)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,A=(e,t,s,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of R(t))!K.call(e,i)&&i!==s&&T(e,i,{get:()=>t[i],enumerable:!(o=M(t,i))||o.enumerable});return e},H=(e,t,s)=>(A(e,t,"default"),s&&A(s,t,"default")),f=(e,t,s)=>(E(e,typeof t!="symbol"?t+"":t,s),s),a={};H(a,N);var V=class{constructor(e,t){this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker()),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange(()=>this._updateExtraLibs())}_configChangeListener;_updateExtraLibsToken;_extraLibsChangeListener;_worker;_client;dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}async _updateExtraLibs(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){return this._client||(this._client=(async()=>(this._worker=a.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),this._defaults.getEagerModelSync()?await this._worker.withSyncedResources(a.editor.getModels().filter(e=>e.getLanguageId()===this._modeId).map(e=>e.uri)):await this._worker.getProxy()))()),this._client}async getLanguageServiceWorker(...e){const t=await this._getClient();return this._worker&&await this._worker.withSyncedResources(e),t}},n={};n["lib.d.ts"]=!0;n["lib.decorators.d.ts"]=!0;n["lib.decorators.legacy.d.ts"]=!0;n["lib.dom.d.ts"]=!0;n["lib.dom.iterable.d.ts"]=!0;n["lib.es2015.collection.d.ts"]=!0;n["lib.es2015.core.d.ts"]=!0;n["lib.es2015.d.ts"]=!0;n["lib.es2015.generator.d.ts"]=!0;n["lib.es2015.iterable.d.ts"]=!0;n["lib.es2015.promise.d.ts"]=!0;n["lib.es2015.proxy.d.ts"]=!0;n["lib.es2015.reflect.d.ts"]=!0;n["lib.es2015.symbol.d.ts"]=!0;n["lib.es2015.symbol.wellknown.d.ts"]=!0;n["lib.es2016.array.include.d.ts"]=!0;n["lib.es2016.d.ts"]=!0;n["lib.es2016.full.d.ts"]=!0;n["lib.es2017.d.ts"]=!0;n["lib.es2017.full.d.ts"]=!0;n["lib.es2017.intl.d.ts"]=!0;n["lib.es2017.object.d.ts"]=!0;n["lib.es2017.sharedmemory.d.ts"]=!0;n["lib.es2017.string.d.ts"]=!0;n["lib.es2017.typedarrays.d.ts"]=!0;n["lib.es2018.asyncgenerator.d.ts"]=!0;n["lib.es2018.asynciterable.d.ts"]=!0;n["lib.es2018.d.ts"]=!0;n["lib.es2018.full.d.ts"]=!0;n["lib.es2018.intl.d.ts"]=!0;n["lib.es2018.promise.d.ts"]=!0;n["lib.es2018.regexp.d.ts"]=!0;n["lib.es2019.array.d.ts"]=!0;n["lib.es2019.d.ts"]=!0;n["lib.es2019.full.d.ts"]=!0;n["lib.es2019.intl.d.ts"]=!0;n["lib.es2019.object.d.ts"]=!0;n["lib.es2019.string.d.ts"]=!0;n["lib.es2019.symbol.d.ts"]=!0;n["lib.es2020.bigint.d.ts"]=!0;n["lib.es2020.d.ts"]=!0;n["lib.es2020.date.d.ts"]=!0;n["lib.es2020.full.d.ts"]=!0;n["lib.es2020.intl.d.ts"]=!0;n["lib.es2020.number.d.ts"]=!0;n["lib.es2020.promise.d.ts"]=!0;n["lib.es2020.sharedmemory.d.ts"]=!0;n["lib.es2020.string.d.ts"]=!0;n["lib.es2020.symbol.wellknown.d.ts"]=!0;n["lib.es2021.d.ts"]=!0;n["lib.es2021.full.d.ts"]=!0;n["lib.es2021.intl.d.ts"]=!0;n["lib.es2021.promise.d.ts"]=!0;n["lib.es2021.string.d.ts"]=!0;n["lib.es2021.weakref.d.ts"]=!0;n["lib.es2022.array.d.ts"]=!0;n["lib.es2022.d.ts"]=!0;n["lib.es2022.error.d.ts"]=!0;n["lib.es2022.full.d.ts"]=!0;n["lib.es2022.intl.d.ts"]=!0;n["lib.es2022.object.d.ts"]=!0;n["lib.es2022.regexp.d.ts"]=!0;n["lib.es2022.sharedmemory.d.ts"]=!0;n["lib.es2022.string.d.ts"]=!0;n["lib.es2023.array.d.ts"]=!0;n["lib.es2023.d.ts"]=!0;n["lib.es2023.full.d.ts"]=!0;n["lib.es5.d.ts"]=!0;n["lib.es6.d.ts"]=!0;n["lib.esnext.d.ts"]=!0;n["lib.esnext.full.d.ts"]=!0;n["lib.esnext.intl.d.ts"]=!0;n["lib.scripthost.d.ts"]=!0;n["lib.webworker.d.ts"]=!0;n["lib.webworker.importscripts.d.ts"]=!0;n["lib.webworker.iterable.d.ts"]=!0;function C(e,t,s=0){if(typeof e=="string")return e;if(e===void 0)return"";let o="";if(s){o+=t;for(let i=0;i<s;i++)o+="  "}if(o+=e.messageText,s++,e.next)for(const i of e.next)o+=C(i,t,s);return o}function w(e){return e?e.map(t=>t.text).join(""):""}var _=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let s=e.getPositionAt(t.start),o=e.getPositionAt(t.start+t.length),{lineNumber:i,column:u}=s,{lineNumber:c,column:r}=o;return{startLineNumber:i,startColumn:u,endLineNumber:c,endColumn:r}}},W=class{constructor(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}_libFiles;_hasFetchedLibFiles;_fetchLibFilesPromise;isLibFile(e){return e&&e.path.indexOf("/lib.")===0?!!n[e.path.slice(1)]:!1}getOrCreateModel(e){const t=a.Uri.parse(e),s=a.editor.getModel(t);if(s)return s;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return a.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);const o=I.getExtraLibs()[e];return o?a.editor.createModel(o.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){this._containsLibFile(e)&&await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then(e=>e.getLibFiles()).then(e=>{this._hasFetchedLibFiles=!0,this._libFiles=e})),this._fetchLibFilesPromise}},j=class extends _{constructor(e,t,s,o){super(o),this._libFiles=e,this._defaults=t,this._selector=s;const i=r=>{if(r.getLanguageId()!==s)return;const g=()=>{const{onlyVisible:h}=this._defaults.getDiagnosticsOptions();h?r.isAttachedToEditor()&&this._doValidate(r):this._doValidate(r)};let d;const p=r.onDidChangeContent(()=>{clearTimeout(d),d=window.setTimeout(g,500)}),b=r.onDidChangeAttached(()=>{const{onlyVisible:h}=this._defaults.getDiagnosticsOptions();h&&(r.isAttachedToEditor()?g():a.editor.setModelMarkers(r,this._selector,[]))});this._listener[r.uri.toString()]={dispose(){p.dispose(),b.dispose(),clearTimeout(d)}},g()},u=r=>{a.editor.setModelMarkers(r,this._selector,[]);const g=r.uri.toString();this._listener[g]&&(this._listener[g].dispose(),delete this._listener[g])};this._disposables.push(a.editor.onDidCreateModel(r=>i(r))),this._disposables.push(a.editor.onWillDisposeModel(u)),this._disposables.push(a.editor.onDidChangeModelLanguage(r=>{u(r.model),i(r.model)})),this._disposables.push({dispose(){for(const r of a.editor.getModels())u(r)}});const c=()=>{for(const r of a.editor.getModels())u(r),i(r)};this._disposables.push(this._defaults.onDidChange(c)),this._disposables.push(this._defaults.onDidExtraLibsChange(c)),a.editor.getModels().forEach(r=>i(r))}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables=[]}async _doValidate(e){const t=await this._worker(e.uri);if(e.isDisposed())return;const s=[],{noSyntaxValidation:o,noSemanticValidation:i,noSuggestionDiagnostics:u}=this._defaults.getDiagnosticsOptions();o||s.push(t.getSyntacticDiagnostics(e.uri.toString())),i||s.push(t.getSemanticDiagnostics(e.uri.toString())),u||s.push(t.getSuggestionDiagnostics(e.uri.toString()));const c=await Promise.all(s);if(!c||e.isDisposed())return;const r=c.reduce((d,p)=>p.concat(d),[]).filter(d=>(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(d.code)===-1),g=r.map(d=>d.relatedInformation||[]).reduce((d,p)=>p.concat(d),[]).map(d=>d.file?a.Uri.parse(d.file.fileName):null);await this._libFiles.fetchLibFilesIfNecessary(g),!e.isDisposed()&&a.editor.setModelMarkers(e,this._selector,r.map(d=>this._convertDiagnostics(e,d)))}_convertDiagnostics(e,t){const s=t.start||0,o=t.length||1,{lineNumber:i,column:u}=e.getPositionAt(s),{lineNumber:c,column:r}=e.getPositionAt(s+o),g=[];return t.reportsUnnecessary&&g.push(a.MarkerTag.Unnecessary),t.reportsDeprecated&&g.push(a.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:i,startColumn:u,endLineNumber:c,endColumn:r,message:C(t.messageText,`
`),code:t.code.toString(),tags:g,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];const s=[];return t.forEach(o=>{let i=e;if(o.file&&(i=this._libFiles.getOrCreateModel(o.file.fileName)),!i)return;const u=o.start||0,c=o.length||1,{lineNumber:r,column:g}=i.getPositionAt(u),{lineNumber:d,column:p}=i.getPositionAt(u+c);s.push({resource:i.uri,startLineNumber:r,startColumn:g,endLineNumber:d,endColumn:p,message:C(o.messageText,`
`)})}),s}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return a.MarkerSeverity.Error;case 3:return a.MarkerSeverity.Info;case 0:return a.MarkerSeverity.Warning;case 2:return a.MarkerSeverity.Hint}return a.MarkerSeverity.Info}},x=class extends _{get triggerCharacters(){return["."]}async provideCompletionItems(e,t,s,o){const i=e.getWordUntilPosition(t),u=new a.Range(t.lineNumber,i.startColumn,t.lineNumber,i.endColumn),c=e.uri,r=e.getOffsetAt(t),g=await this._worker(c);if(e.isDisposed())return;const d=await g.getCompletionsAtPosition(c.toString(),r);return!d||e.isDisposed()?void 0:{suggestions:d.entries.map(b=>{let h=u;if(b.replacementSpan){const S=e.getPositionAt(b.replacementSpan.start),v=e.getPositionAt(b.replacementSpan.start+b.replacementSpan.length);h=new a.Range(S.lineNumber,S.column,v.lineNumber,v.column)}const y=[];return b.kindModifiers!==void 0&&b.kindModifiers.indexOf("deprecated")!==-1&&y.push(a.languages.CompletionItemTag.Deprecated),{uri:c,position:t,offset:r,range:h,label:b.name,insertText:b.name,sortText:b.sortText,kind:x.convertKind(b.kind),tags:y}})}}async resolveCompletionItem(e,t){const s=e,o=s.uri,i=s.position,u=s.offset,r=await(await this._worker(o)).getCompletionEntryDetails(o.toString(),u,s.label);return r?{uri:o,position:i,label:r.name,kind:x.convertKind(r.kind),detail:w(r.displayParts),documentation:{value:x.createDocumentationString(r)}}:s}static convertKind(e){switch(e){case l.primitiveType:case l.keyword:return a.languages.CompletionItemKind.Keyword;case l.variable:case l.localVariable:return a.languages.CompletionItemKind.Variable;case l.memberVariable:case l.memberGetAccessor:case l.memberSetAccessor:return a.languages.CompletionItemKind.Field;case l.function:case l.memberFunction:case l.constructSignature:case l.callSignature:case l.indexSignature:return a.languages.CompletionItemKind.Function;case l.enum:return a.languages.CompletionItemKind.Enum;case l.module:return a.languages.CompletionItemKind.Module;case l.class:return a.languages.CompletionItemKind.Class;case l.interface:return a.languages.CompletionItemKind.Interface;case l.warning:return a.languages.CompletionItemKind.File}return a.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=w(e.documentation);if(e.tags)for(const s of e.tags)t+=`

${L(s)}`;return t}};function L(e){let t=`*@${e.name}*`;if(e.name==="param"&&e.text){const[s,...o]=e.text;t+=`\`${s.text}\``,o.length>0&&(t+=` — ${o.map(i=>i.text).join(" ")}`)}else Array.isArray(e.text)?t+=` — ${e.text.map(s=>s.text).join(" ")}`:e.text&&(t+=` — ${e.text}`);return t}var P=class extends _{signatureHelpTriggerCharacters=["(",","];static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case a.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case a.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case a.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(e,t,s,o){const i=e.uri,u=e.getOffsetAt(t),c=await this._worker(i);if(e.isDisposed())return;const r=await c.getSignatureHelpItems(i.toString(),u,{triggerReason:P._toSignatureHelpTriggerReason(o)});if(!r||e.isDisposed())return;const g={activeSignature:r.selectedItemIndex,activeParameter:r.argumentIndex,signatures:[]};return r.items.forEach(d=>{const p={label:"",parameters:[]};p.documentation={value:w(d.documentation)},p.label+=w(d.prefixDisplayParts),d.parameters.forEach((b,h,y)=>{const S=w(b.displayParts),v={label:S,documentation:{value:w(b.documentation)}};p.label+=S,p.parameters.push(v),h<y.length-1&&(p.label+=w(d.separatorDisplayParts))}),p.label+=w(d.suffixDisplayParts),g.signatures.push(p)}),{value:g,dispose(){}}}},B=class extends _{async provideHover(e,t,s){const o=e.uri,i=e.getOffsetAt(t),u=await this._worker(o);if(e.isDisposed())return;const c=await u.getQuickInfoAtPosition(o.toString(),i);if(!c||e.isDisposed())return;const r=w(c.documentation),g=c.tags?c.tags.map(p=>L(p)).join(`  

`):"",d=w(c.displayParts);return{range:this._textSpanToRange(e,c.textSpan),contents:[{value:"```typescript\n"+d+"\n```\n"},{value:r+(g?`

`+g:"")}]}}},U=class extends _{async provideDocumentHighlights(e,t,s){const o=e.uri,i=e.getOffsetAt(t),u=await this._worker(o);if(e.isDisposed())return;const c=await u.getDocumentHighlights(o.toString(),i,[o.toString()]);if(!(!c||e.isDisposed()))return c.flatMap(r=>r.highlightSpans.map(g=>({range:this._textSpanToRange(e,g.textSpan),kind:g.kind==="writtenReference"?a.languages.DocumentHighlightKind.Write:a.languages.DocumentHighlightKind.Text})))}},$=class extends _{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,s){const o=e.uri,i=e.getOffsetAt(t),u=await this._worker(o);if(e.isDisposed())return;const c=await u.getDefinitionAtPosition(o.toString(),i);if(!c||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(c.map(g=>a.Uri.parse(g.fileName))),e.isDisposed()))return;const r=[];for(let g of c){const d=this._libFiles.getOrCreateModel(g.fileName);d&&r.push({uri:d.uri,range:this._textSpanToRange(d,g.textSpan)})}return r}},z=class extends _{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,s,o){const i=e.uri,u=e.getOffsetAt(t),c=await this._worker(i);if(e.isDisposed())return;const r=await c.getReferencesAtPosition(i.toString(),u);if(!r||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(r.map(d=>a.Uri.parse(d.fileName))),e.isDisposed()))return;const g=[];for(let d of r){const p=this._libFiles.getOrCreateModel(d.fileName);p&&g.push({uri:p.uri,range:this._textSpanToRange(p,d.textSpan)})}return g}},G=class extends _{async provideDocumentSymbols(e,t){const s=e.uri,o=await this._worker(s);if(e.isDisposed())return;const i=await o.getNavigationTree(s.toString());if(!i||e.isDisposed())return;const u=(r,g)=>({name:r.text,detail:"",kind:m[r.kind]||a.languages.SymbolKind.Variable,range:this._textSpanToRange(e,r.spans[0]),selectionRange:this._textSpanToRange(e,r.spans[0]),tags:[],children:r.childItems?.map(p=>u(p,r.text)),containerName:g});return i.childItems?i.childItems.map(r=>u(r)):[]}},l=class{};f(l,"unknown","");f(l,"keyword","keyword");f(l,"script","script");f(l,"module","module");f(l,"class","class");f(l,"interface","interface");f(l,"type","type");f(l,"enum","enum");f(l,"variable","var");f(l,"localVariable","local var");f(l,"function","function");f(l,"localFunction","local function");f(l,"memberFunction","method");f(l,"memberGetAccessor","getter");f(l,"memberSetAccessor","setter");f(l,"memberVariable","property");f(l,"constructorImplementation","constructor");f(l,"callSignature","call");f(l,"indexSignature","index");f(l,"constructSignature","construct");f(l,"parameter","parameter");f(l,"typeParameter","type parameter");f(l,"primitiveType","primitive type");f(l,"label","label");f(l,"alias","alias");f(l,"const","const");f(l,"let","let");f(l,"warning","warning");var m=Object.create(null);m[l.module]=a.languages.SymbolKind.Module;m[l.class]=a.languages.SymbolKind.Class;m[l.enum]=a.languages.SymbolKind.Enum;m[l.interface]=a.languages.SymbolKind.Interface;m[l.memberFunction]=a.languages.SymbolKind.Method;m[l.memberVariable]=a.languages.SymbolKind.Property;m[l.memberGetAccessor]=a.languages.SymbolKind.Property;m[l.memberSetAccessor]=a.languages.SymbolKind.Property;m[l.variable]=a.languages.SymbolKind.Variable;m[l.const]=a.languages.SymbolKind.Variable;m[l.localVariable]=a.languages.SymbolKind.Variable;m[l.variable]=a.languages.SymbolKind.Variable;m[l.function]=a.languages.SymbolKind.Function;m[l.localFunction]=a.languages.SymbolKind.Function;var k=class extends _{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:`
`,InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},J=class extends k{canFormatMultipleRanges=!1;async provideDocumentRangeFormattingEdits(e,t,s,o){const i=e.uri,u=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),c=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),r=await this._worker(i);if(e.isDisposed())return;const g=await r.getFormattingEditsForRange(i.toString(),u,c,k._convertOptions(s));if(!(!g||e.isDisposed()))return g.map(d=>this._convertTextChanges(e,d))}},Q=class extends k{get autoFormatTriggerCharacters(){return[";","}",`
`]}async provideOnTypeFormattingEdits(e,t,s,o,i){const u=e.uri,c=e.getOffsetAt(t),r=await this._worker(u);if(e.isDisposed())return;const g=await r.getFormattingEditsAfterKeystroke(u.toString(),c,s,k._convertOptions(o));if(!(!g||e.isDisposed()))return g.map(d=>this._convertTextChanges(e,d))}},q=class extends k{async provideCodeActions(e,t,s,o){const i=e.uri,u=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),c=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),r=k._convertOptions(e.getOptions()),g=s.markers.filter(h=>h.code).map(h=>h.code).map(Number),d=await this._worker(i);if(e.isDisposed())return;const p=await d.getCodeFixesAtPosition(i.toString(),u,c,g,r);return!p||e.isDisposed()?{actions:[],dispose:()=>{}}:{actions:p.filter(h=>h.changes.filter(y=>y.isNewFile).length===0).map(h=>this._tsCodeFixActionToMonacoCodeAction(e,s,h)),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,s){const o=[];for(const u of s.changes)for(const c of u.textChanges)o.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,c.span),text:c.newText}});return{title:s.description,edit:{edits:o},diagnostics:t.markers,kind:"quickfix"}}},X=class extends _{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,s,o){const i=e.uri,u=i.toString(),c=e.getOffsetAt(t),r=await this._worker(i);if(e.isDisposed())return;const g=await r.getRenameInfo(u,c,{allowRenameOfImportPath:!1});if(g.canRename===!1)return{edits:[],rejectReason:g.localizedErrorMessage};if(g.fileToRename!==void 0)throw new Error("Renaming files is not supported.");const d=await r.findRenameLocations(u,c,!1,!1,!1);if(!d||e.isDisposed())return;const p=[];for(const b of d){const h=this._libFiles.getOrCreateModel(b.fileName);if(h)p.push({resource:h.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(h,b.textSpan),text:s}});else throw new Error(`Unknown file ${b.fileName}.`)}return{edits:p}}},Y=class extends _{async provideInlayHints(e,t,s){const o=e.uri,i=o.toString(),u=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),c=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),r=await this._worker(o);return e.isDisposed()?null:{hints:(await r.provideInlayHints(i,u,c)).map(p=>({...p,label:p.text,position:e.getPositionAt(p.position),kind:this._convertHintKind(p.kind)})),dispose:()=>{}}}_convertHintKind(e){switch(e){case"Parameter":return a.languages.InlayHintKind.Parameter;case"Type":return a.languages.InlayHintKind.Type;default:return a.languages.InlayHintKind.Type}}},D,F;function re(e){F=O(e,"typescript")}function se(e){D=O(e,"javascript")}function ie(){return new Promise((e,t)=>{if(!D)return t("JavaScript not registered!");e(D)})}function ne(){return new Promise((e,t)=>{if(!F)return t("TypeScript not registered!");e(F)})}function O(e,t){const s=[],o=new V(t,e),i=(...r)=>o.getLanguageServiceWorker(...r),u=new W(i);function c(){const{modeConfiguration:r}=e;Z(s),r.completionItems&&s.push(a.languages.registerCompletionItemProvider(t,new x(i))),r.signatureHelp&&s.push(a.languages.registerSignatureHelpProvider(t,new P(i))),r.hovers&&s.push(a.languages.registerHoverProvider(t,new B(i))),r.documentHighlights&&s.push(a.languages.registerDocumentHighlightProvider(t,new U(i))),r.definitions&&s.push(a.languages.registerDefinitionProvider(t,new $(u,i))),r.references&&s.push(a.languages.registerReferenceProvider(t,new z(u,i))),r.documentSymbols&&s.push(a.languages.registerDocumentSymbolProvider(t,new G(i))),r.rename&&s.push(a.languages.registerRenameProvider(t,new X(u,i))),r.documentRangeFormattingEdits&&s.push(a.languages.registerDocumentRangeFormattingEditProvider(t,new J(i))),r.onTypeFormattingEdits&&s.push(a.languages.registerOnTypeFormattingEditProvider(t,new Q(i))),r.codeActions&&s.push(a.languages.registerCodeActionProvider(t,new q(i))),r.inlayHints&&s.push(a.languages.registerInlayHintsProvider(t,new Y(i))),r.diagnostics&&s.push(new j(u,e,t,i))}return c(),i}function Z(e){for(;e.length;)e.pop().dispose()}export{_ as Adapter,q as CodeActionAdaptor,$ as DefinitionAdapter,j as DiagnosticsAdapter,U as DocumentHighlightAdapter,J as FormatAdapter,k as FormatHelper,Q as FormatOnTypeAdapter,Y as InlayHintsAdapter,l as Kind,W as LibFiles,G as OutlineAdapter,B as QuickInfoAdapter,z as ReferenceAdapter,X as RenameAdapter,P as SignatureHelpAdapter,x as SuggestAdapter,V as WorkerManager,C as flattenDiagnosticMessageText,ie as getJavaScriptWorker,ne as getTypeScriptWorker,se as setupJavaScript,re as setupTypeScript};

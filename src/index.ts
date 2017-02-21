
/**
 * Created by kor on 06/05/15.
 */

import * as loader from './loader';
import * as dumper from './dumper';
import { YAMLException } from "./exception";
export { Kind, YAMLDocument, YAMLNode, YAMLAnchorReference, YAMLScalar, YAMLMapping, YAMLSequence, YamlMap,
        newMapping, newAnchorRef, newScalar, newItems, newSeq, newMap } from "./yamlAST";

export type Error = YAMLException;

export var load     = loader.load;
export var loadAll  = loader.loadAll;
export var safeLoad = loader.safeLoad;
export var dump     = dumper.dump;
export var safeDump = dumper.safeDump;

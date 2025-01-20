
      // auto generated
      //var self;

      // class constructor:
      function QFormLayout() {
        

        // should be QFormLayout_BaseJs.call(this, engine):
        //QFormLayout.prototype = new QFormLayout_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QFormLayout.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QFormLayout);
                
            //}
          }
          else {
            qWarning("QFormLayout.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QFormLayout.js: No constructor found for class QFormLayout");
            
        }

        //self = this;
        //if (typeof(this.wrapper)!=="undefined") {
        //  this.wrapper.setEngine(engine);
        //}


        if (typeof(wrapper)!=="undefined") {
          //var localSelf = this;
          //print("QAction self:", localSelf);
          // TODO:
          //this.wrapper.triggered.connect(function(checked) { print("action triggered. self:", localSelf); localSelf.triggeredEmitter(checked); });
          
        }

        

      }

      //QFormLayout.prototype = new QFormLayout_BaseJs(engine);
      //QFormLayout.prototype = new QFormLayout_Wrapper(engine);
      QFormLayout.prototype = new Object();

      QFormLayout.prototype.toString = function() {
          //return "QFormLayout [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QFormLayout [JS]";
        };
      QFormLayout.getObjectType = function() {
        return RJSType_QFormLayout.getIdStatic();
      };

      QFormLayout.prototype.getObjectType = function() {
        return RJSType_QFormLayout.getIdStatic();
      };

      QFormLayout.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QFormLayout.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QLayout.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: FieldGrowthPolicy
QFormLayout.FieldsStayAtSizeHint = QFormLayout_Wrapper.FieldsStayAtSizeHint;
QFormLayout.ExpandingFieldsGrow = QFormLayout_Wrapper.ExpandingFieldsGrow;
QFormLayout.AllNonFixedFieldsGrow = QFormLayout_Wrapper.AllNonFixedFieldsGrow;

  // enum: RowWrapPolicy
QFormLayout.DontWrapRows = QFormLayout_Wrapper.DontWrapRows;
QFormLayout.WrapLongRows = QFormLayout_Wrapper.WrapLongRows;
QFormLayout.WrapAllRows = QFormLayout_Wrapper.WrapAllRows;

  // enum: ItemRole
QFormLayout.LabelRole = QFormLayout_Wrapper.LabelRole;
QFormLayout.FieldRole = QFormLayout_Wrapper.FieldRole;
QFormLayout.SpanningRole = QFormLayout_Wrapper.SpanningRole;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QFormLayout.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QFormLayout.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      

  // Auto generated
  
    #ifndef QDOM_H_WRAPPER
    #define QDOM_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QIODevice>
      
        #include <QTextStream>
      
        #include <QDomNodeList>
      
        #include <QDomElement>
      
        #include <QDomText>
      
        #include <QDomComment>
      
        #include <QDomCDATASection>
      
        #include <QDomProcessingInstruction>
      
        #include <QDomAttr>
      
        #include <QDomEntityReference>
      
        #include <QDomDocument>
      
        #include <QDomNamedNodeMap>
      
        #include <QDomDocument>
      
        #include <QDomDocumentFragment>
      
        #include <QDomDocumentType>
      
        #include <QDomImplementation>
      
        #include <QDomNode>
      
        #include <QDomEntity>
      
        #include <QDomNotation>
      
        #include <QDomCharacterData>
      
        #include <QXmlStreamReader>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QDomImplementation>
      
      // singleton class wrapper for static functions:
      class QDomImplementation_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QDomImplementation_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: QDomImplementation
    // Function: invalidDataPolicy
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  invalidDataPolicy
              (

                
              )
              
              ;
            
    // Class: QDomImplementation
    // Function: setInvalidDataPolicy
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setInvalidDataPolicy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QDomImplementation_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QDomImplementation
    class QDomImplementation_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QDomImplementation_Wrapper(const QDomImplementation_Wrapper&);

    public:
      // initialization of QDomImplementation:
      static void init(RJSApi& handler);

      
        static QDomImplementation* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QDomImplementation.length(); i++) {
            RJSBasecaster_QDomImplementation* basecaster = basecasters_QDomImplementation[i];
            QDomImplementation* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QDomImplementation::getIdStatic()) {
            return (QDomImplementation*)vp;
          }

          qWarning() << "QDomImplementation::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QDomImplementation* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QDomImplementation*: wrapper wraps NULL";
          }

          QDomImplementation* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QDomImplementation*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum InvalidDataPolicy {
    AcceptInvalidChars = QDomImplementation::AcceptInvalidChars,
DropInvalidChars = QDomImplementation::DropInvalidChars,
ReturnNullNode = QDomImplementation::ReturnNullNode,

  };
  Q_ENUM(InvalidDataPolicy)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QDomImplementation_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QDomImplementation_Wrapper(RJSApi& h, QDomImplementation* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QDomImplementation_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QDomImplementation
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QDomImplementation_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QDomImplementation
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomImplementation
    // Function: operator_equal
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_equal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomImplementation
    // Function: operator_unequal
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_unequal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomImplementation
    // Function: hasFeature
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasFeature
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomImplementation
    // Function: createDocumentType
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  createDocumentType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomImplementation
    // Function: createDocument
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  createDocument
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomImplementation
    // Function: isNull
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNull
              (

                
              )
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QDomImplementation::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QDomImplementation* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QDomImplementation* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QDomImplementation* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QDomImplementation*> basecasters_QDomImplementation;

      public:
        static void registerBasecaster_QDomImplementation(RJSBasecaster_QDomImplementation* bc) {
          basecasters_QDomImplementation.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QDomImplementation_Wrapper*)

    Q_DECLARE_INTERFACE(QDomImplementation_Wrapper, "org.qcad.QDomImplementation_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QDomNode>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QDomNode
    class QDomNode_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QDomNode_Wrapper(const QDomNode_Wrapper&);

    public:
      // initialization of QDomNode:
      static void init(RJSApi& handler);

      
        static QDomNode* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            
              if (t==RJSType_QDomDocumentType::getIdStatic()) {
                return (QDomNode*)(QDomDocumentType*)vp;
              }
              
              if (t==RJSType_QDomDocument::getIdStatic()) {
                return (QDomNode*)(QDomDocument*)vp;
              }
              
              if (t==RJSType_QDomDocumentFragment::getIdStatic()) {
                return (QDomNode*)(QDomDocumentFragment*)vp;
              }
              
              if (t==RJSType_QDomCharacterData::getIdStatic()) {
                return (QDomNode*)(QDomCharacterData*)vp;
              }
              
              if (t==RJSType_QDomAttr::getIdStatic()) {
                return (QDomNode*)(QDomAttr*)vp;
              }
              
              if (t==RJSType_QDomElement::getIdStatic()) {
                return (QDomNode*)(QDomElement*)vp;
              }
              
              if (t==RJSType_QDomText::getIdStatic()) {
                return (QDomNode*)(QDomText*)vp;
              }
              
              if (t==RJSType_QDomNotation::getIdStatic()) {
                return (QDomNode*)(QDomNotation*)vp;
              }
              
              if (t==RJSType_QDomEntity::getIdStatic()) {
                return (QDomNode*)(QDomEntity*)vp;
              }
              
              if (t==RJSType_QDomEntityReference::getIdStatic()) {
                return (QDomNode*)(QDomEntityReference*)vp;
              }
              
              if (t==RJSType_QDomProcessingInstruction::getIdStatic()) {
                return (QDomNode*)(QDomProcessingInstruction*)vp;
              }
              

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QDomNode.length(); i++) {
            RJSBasecaster_QDomNode* basecaster = basecasters_QDomNode[i];
            QDomNode* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QDomNode::getIdStatic()) {
            return (QDomNode*)vp;
          }

          qWarning() << "QDomNode::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QDomNode* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QDomNode*: wrapper wraps NULL";
          }

          QDomNode* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QDomNode*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum NodeType {
    ElementNode = QDomNode::ElementNode,
AttributeNode = QDomNode::AttributeNode,
TextNode = QDomNode::TextNode,
CDATASectionNode = QDomNode::CDATASectionNode,
EntityReferenceNode = QDomNode::EntityReferenceNode,
EntityNode = QDomNode::EntityNode,
ProcessingInstructionNode = QDomNode::ProcessingInstructionNode,
CommentNode = QDomNode::CommentNode,
DocumentNode = QDomNode::DocumentNode,
DocumentTypeNode = QDomNode::DocumentTypeNode,
DocumentFragmentNode = QDomNode::DocumentFragmentNode,
NotationNode = QDomNode::NotationNode,
BaseNode = QDomNode::BaseNode,
CharacterDataNode = QDomNode::CharacterDataNode,

  };
  Q_ENUM(NodeType)

  enum EncodingPolicy {
    EncodingFromDocument = QDomNode::EncodingFromDocument,
EncodingFromTextStream = QDomNode::EncodingFromTextStream,

  };
  Q_ENUM(EncodingPolicy)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QDomNode_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QDomNode_Wrapper(RJSApi& h, QDomNode* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QDomNode_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QDomNode
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QDomNode_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QDomNode
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomNode
    // Function: operator_equal
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_equal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: operator_unequal
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_unequal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: insertBefore
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertBefore
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomNode
    // Function: insertAfter
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertAfter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomNode
    // Function: replaceChild
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  replaceChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomNode
    // Function: removeChild
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomNode
    // Function: appendChild
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  appendChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomNode
    // Function: hasChildNodes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasChildNodes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: cloneNode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cloneNode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: normalize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  normalize
              (

                
              )
              
              ;
            
    // Class: QDomNode
    // Function: isSupported
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSupported
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: nodeName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: nodeType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: parentNode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  parentNode
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: childNodes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  childNodes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: firstChild
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  firstChild
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: lastChild
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastChild
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: previousSibling
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  previousSibling
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: nextSibling
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextSibling
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: attributes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  attributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: ownerDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ownerDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: namespaceURI
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namespaceURI
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: localName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  localName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: hasAttributes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasAttributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: nodeValue
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeValue
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: setNodeValue
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setNodeValue
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomNode
    // Function: prefix
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  prefix
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: setPrefix
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPrefix
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomNode
    // Function: isAttr
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAttr
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: isCDATASection
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCDATASection
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: isDocumentFragment
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocumentFragment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: isDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: isDocumentType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocumentType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: isElement
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: isEntityReference
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEntityReference
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: isText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isText
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: isEntity
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: isNotation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: isProcessingInstruction
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isProcessingInstruction
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: isCharacterData
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCharacterData
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: isComment
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isComment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: namedItem
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namedItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: isNull
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNull
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clear
              (

                
              )
              
              ;
            
    // Class: QDomNode
    // Function: toAttr
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toAttr
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: toCDATASection
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCDATASection
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: toDocumentFragment
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocumentFragment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: toDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: toDocumentType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocumentType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: toElement
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: toEntityReference
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toEntityReference
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: toText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toText
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: toEntity
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: toNotation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toNotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: toProcessingInstruction
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toProcessingInstruction
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: toCharacterData
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCharacterData
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: toComment
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toComment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: firstChildElement
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  firstChildElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: lastChildElement
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastChildElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: previousSiblingElement
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  previousSiblingElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: nextSiblingElement
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextSiblingElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: lineNumber
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lineNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNode
    // Function: columnNumber
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  columnNumber
              (

                
              )
              
                const
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QDomNode::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QDomNode* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QDomNode* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QDomNode* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QDomNode*> basecasters_QDomNode;

      public:
        static void registerBasecaster_QDomNode(RJSBasecaster_QDomNode* bc) {
          basecasters_QDomNode.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QDomNode_Wrapper*)

    Q_DECLARE_INTERFACE(QDomNode_Wrapper, "org.qcad.QDomNode_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QDomNodeList>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QDomNodeList
    class QDomNodeList_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QDomNodeList_Wrapper(const QDomNodeList_Wrapper&);

    public:
      // initialization of QDomNodeList:
      static void init(RJSApi& handler);

      
        static QDomNodeList* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QDomNodeList.length(); i++) {
            RJSBasecaster_QDomNodeList* basecaster = basecasters_QDomNodeList[i];
            QDomNodeList* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QDomNodeList::getIdStatic()) {
            return (QDomNodeList*)vp;
          }

          qWarning() << "QDomNodeList::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QDomNodeList* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QDomNodeList*: wrapper wraps NULL";
          }

          QDomNodeList* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QDomNodeList*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QDomNodeList_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QDomNodeList_Wrapper(RJSApi& h, QDomNodeList* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QDomNodeList_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QDomNodeList
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QDomNodeList_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QDomNodeList
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomNodeList
    // Function: operator_equal
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_equal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNodeList
    // Function: operator_unequal
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_unequal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNodeList
    // Function: item
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  item
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNodeList
    // Function: at
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  at
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNodeList
    // Function: length
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  length
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNodeList
    // Function: count
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  count
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNodeList
    // Function: size
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  size
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNodeList
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEmpty
              (

                
              )
              
                const
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QDomNodeList::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QDomNodeList* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QDomNodeList* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QDomNodeList* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QDomNodeList*> basecasters_QDomNodeList;

      public:
        static void registerBasecaster_QDomNodeList(RJSBasecaster_QDomNodeList* bc) {
          basecasters_QDomNodeList.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QDomNodeList_Wrapper*)

    Q_DECLARE_INTERFACE(QDomNodeList_Wrapper, "org.qcad.QDomNodeList_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QDomDocumentType>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QDomDocumentType
    class QDomDocumentType_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QDomDocumentType_Wrapper(const QDomDocumentType_Wrapper&);

    public:
      // initialization of QDomDocumentType:
      static void init(RJSApi& handler);

      
        static QDomDocumentType* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QDomDocumentType.length(); i++) {
            RJSBasecaster_QDomDocumentType* basecaster = basecasters_QDomDocumentType[i];
            QDomDocumentType* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QDomDocumentType::getIdStatic()) {
            return (QDomDocumentType*)vp;
          }

          qWarning() << "QDomDocumentType::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QDomDocumentType* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QDomDocumentType*: wrapper wraps NULL";
          }

          QDomDocumentType* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QDomDocumentType*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum NodeType {
    ElementNode = QDomDocumentType::ElementNode,
AttributeNode = QDomDocumentType::AttributeNode,
TextNode = QDomDocumentType::TextNode,
CDATASectionNode = QDomDocumentType::CDATASectionNode,
EntityReferenceNode = QDomDocumentType::EntityReferenceNode,
EntityNode = QDomDocumentType::EntityNode,
ProcessingInstructionNode = QDomDocumentType::ProcessingInstructionNode,
CommentNode = QDomDocumentType::CommentNode,
DocumentNode = QDomDocumentType::DocumentNode,
DocumentTypeNode = QDomDocumentType::DocumentTypeNode,
DocumentFragmentNode = QDomDocumentType::DocumentFragmentNode,
NotationNode = QDomDocumentType::NotationNode,
BaseNode = QDomDocumentType::BaseNode,
CharacterDataNode = QDomDocumentType::CharacterDataNode,

  };
  Q_ENUM(NodeType)

  enum EncodingPolicy {
    EncodingFromDocument = QDomDocumentType::EncodingFromDocument,
EncodingFromTextStream = QDomDocumentType::EncodingFromTextStream,

  };
  Q_ENUM(EncodingPolicy)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QDomDocumentType_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QDomDocumentType_Wrapper(RJSApi& h, QDomDocumentType* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QDomDocumentType_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QDomDocumentType
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QDomDocumentType_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QDomDocumentType
    // Function: operator_equal
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_equal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: operator_unequal
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_unequal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: insertBefore
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertBefore
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocumentType
    // Function: insertAfter
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertAfter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocumentType
    // Function: replaceChild
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  replaceChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocumentType
    // Function: removeChild
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocumentType
    // Function: appendChild
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  appendChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocumentType
    // Function: hasChildNodes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasChildNodes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: cloneNode
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cloneNode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: normalize
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  normalize
              (

                
              )
              
              ;
            
    // Class: QDomDocumentType
    // Function: isSupported
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSupported
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: nodeName
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: parentNode
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  parentNode
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: childNodes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  childNodes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: firstChild
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  firstChild
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: lastChild
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastChild
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: previousSibling
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  previousSibling
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: nextSibling
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextSibling
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: attributes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  attributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: ownerDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ownerDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: namespaceURI
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namespaceURI
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: localName
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  localName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: hasAttributes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasAttributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: nodeValue
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeValue
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: setNodeValue
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setNodeValue
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocumentType
    // Function: prefix
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  prefix
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: setPrefix
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPrefix
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocumentType
    // Function: isAttr
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAttr
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: isCDATASection
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCDATASection
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: isDocumentFragment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocumentFragment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: isDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: isDocumentType
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocumentType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: isElement
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: isEntityReference
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEntityReference
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: isText
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isText
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: isEntity
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: isNotation
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: isProcessingInstruction
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isProcessingInstruction
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: isCharacterData
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCharacterData
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: isComment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isComment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: namedItem
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namedItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: isNull
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNull
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: clear
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clear
              (

                
              )
              
              ;
            
    // Class: QDomDocumentType
    // Function: toAttr
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toAttr
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: toCDATASection
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCDATASection
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: toDocumentFragment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocumentFragment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: toDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: toDocumentType
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocumentType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: toElement
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: toEntityReference
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toEntityReference
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: toText
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toText
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: toEntity
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: toNotation
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toNotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: toProcessingInstruction
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toProcessingInstruction
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: toCharacterData
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCharacterData
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: toComment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toComment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: firstChildElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  firstChildElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: lastChildElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastChildElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: previousSiblingElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  previousSiblingElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: nextSiblingElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextSiblingElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: lineNumber
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lineNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: columnNumber
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  columnNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocumentType
    // Function: name
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  name
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: entities
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  entities
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: notations
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  notations
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: publicId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  publicId
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: systemId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  systemId
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: internalSubset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  internalSubset
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentType
    // Function: nodeType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeType
              (

                
              )
              
                const
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QDomDocumentType::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QDomDocumentType* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QDomDocumentType* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QDomDocumentType* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QDomDocumentType*> basecasters_QDomDocumentType;

      public:
        static void registerBasecaster_QDomDocumentType(RJSBasecaster_QDomDocumentType* bc) {
          basecasters_QDomDocumentType.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QDomDocumentType_Wrapper*)

    Q_DECLARE_INTERFACE(QDomDocumentType_Wrapper, "org.qcad.QDomDocumentType_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QDomDocument>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QDomDocument
    class QDomDocument_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QDomDocument_Wrapper(const QDomDocument_Wrapper&);

    public:
      // initialization of QDomDocument:
      static void init(RJSApi& handler);

      
        static QDomDocument* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QDomDocument.length(); i++) {
            RJSBasecaster_QDomDocument* basecaster = basecasters_QDomDocument[i];
            QDomDocument* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QDomDocument::getIdStatic()) {
            return (QDomDocument*)vp;
          }

          qWarning() << "QDomDocument::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QDomDocument* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QDomDocument*: wrapper wraps NULL";
          }

          QDomDocument* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QDomDocument*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum NodeType {
    ElementNode = QDomDocument::ElementNode,
AttributeNode = QDomDocument::AttributeNode,
TextNode = QDomDocument::TextNode,
CDATASectionNode = QDomDocument::CDATASectionNode,
EntityReferenceNode = QDomDocument::EntityReferenceNode,
EntityNode = QDomDocument::EntityNode,
ProcessingInstructionNode = QDomDocument::ProcessingInstructionNode,
CommentNode = QDomDocument::CommentNode,
DocumentNode = QDomDocument::DocumentNode,
DocumentTypeNode = QDomDocument::DocumentTypeNode,
DocumentFragmentNode = QDomDocument::DocumentFragmentNode,
NotationNode = QDomDocument::NotationNode,
BaseNode = QDomDocument::BaseNode,
CharacterDataNode = QDomDocument::CharacterDataNode,

  };
  Q_ENUM(NodeType)

  enum EncodingPolicy {
    EncodingFromDocument = QDomDocument::EncodingFromDocument,
EncodingFromTextStream = QDomDocument::EncodingFromTextStream,

  };
  Q_ENUM(EncodingPolicy)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QDomDocument_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QDomDocument_Wrapper(RJSApi& h, QDomDocument* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QDomDocument_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QDomDocument
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QDomDocument_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QDomDocument
    // Function: operator_equal
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_equal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: operator_unequal
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_unequal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: insertBefore
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertBefore
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocument
    // Function: insertAfter
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertAfter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocument
    // Function: replaceChild
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  replaceChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocument
    // Function: removeChild
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocument
    // Function: appendChild
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  appendChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocument
    // Function: hasChildNodes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasChildNodes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: cloneNode
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cloneNode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: normalize
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  normalize
              (

                
              )
              
              ;
            
    // Class: QDomDocument
    // Function: isSupported
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSupported
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: nodeName
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: parentNode
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  parentNode
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: childNodes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  childNodes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: firstChild
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  firstChild
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: lastChild
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastChild
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: previousSibling
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  previousSibling
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: nextSibling
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextSibling
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: attributes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  attributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: ownerDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ownerDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: namespaceURI
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namespaceURI
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: localName
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  localName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: hasAttributes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasAttributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: nodeValue
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeValue
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: setNodeValue
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setNodeValue
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocument
    // Function: prefix
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  prefix
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: setPrefix
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPrefix
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocument
    // Function: isAttr
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAttr
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: isCDATASection
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCDATASection
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: isDocumentFragment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocumentFragment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: isDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: isDocumentType
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocumentType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: isElement
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: isEntityReference
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEntityReference
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: isText
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isText
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: isEntity
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: isNotation
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: isProcessingInstruction
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isProcessingInstruction
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: isCharacterData
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCharacterData
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: isComment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isComment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: namedItem
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namedItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: isNull
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNull
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: clear
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clear
              (

                
              )
              
              ;
            
    // Class: QDomDocument
    // Function: toAttr
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toAttr
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: toCDATASection
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCDATASection
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: toDocumentFragment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocumentFragment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: toDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: toDocumentType
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocumentType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: toElement
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: toEntityReference
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toEntityReference
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: toText
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toText
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: toEntity
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: toNotation
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toNotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: toProcessingInstruction
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toProcessingInstruction
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: toCharacterData
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCharacterData
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: toComment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toComment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: firstChildElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  firstChildElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: lastChildElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastChildElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: previousSiblingElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  previousSiblingElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: nextSiblingElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextSiblingElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: lineNumber
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lineNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: columnNumber
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  columnNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocument
    // Function: createElement
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  createElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocument
    // Function: createDocumentFragment
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  createDocumentFragment
              (

                
              )
              
              ;
            
    // Class: QDomDocument
    // Function: createTextNode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  createTextNode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocument
    // Function: createComment
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  createComment
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocument
    // Function: createCDATASection
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  createCDATASection
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocument
    // Function: createProcessingInstruction
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  createProcessingInstruction
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocument
    // Function: createAttribute
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  createAttribute
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocument
    // Function: createEntityReference
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  createEntityReference
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocument
    // Function: elementsByTagName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  elementsByTagName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: importNode
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  importNode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocument
    // Function: createElementNS
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  createElementNS
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocument
    // Function: createAttributeNS
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  createAttributeNS
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocument
    // Function: elementsByTagNameNS
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  elementsByTagNameNS
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocument
    // Function: elementById
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  elementById
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocument
    // Function: doctype
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  doctype
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: implementation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  implementation
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: documentElement
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  documentElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: nodeType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: setContent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setContent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocument
    // Function: toString
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  
                          // special function name for JS wrapper:
                          toStr
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocument
    // Function: toByteArray
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toByteArray
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QDomDocument::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QDomDocument* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QDomDocument* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QDomDocument* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QDomDocument*> basecasters_QDomDocument;

      public:
        static void registerBasecaster_QDomDocument(RJSBasecaster_QDomDocument* bc) {
          basecasters_QDomDocument.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QDomDocument_Wrapper*)

    Q_DECLARE_INTERFACE(QDomDocument_Wrapper, "org.qcad.QDomDocument_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QDomNamedNodeMap>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QDomNamedNodeMap
    class QDomNamedNodeMap_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QDomNamedNodeMap_Wrapper(const QDomNamedNodeMap_Wrapper&);

    public:
      // initialization of QDomNamedNodeMap:
      static void init(RJSApi& handler);

      
        static QDomNamedNodeMap* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QDomNamedNodeMap.length(); i++) {
            RJSBasecaster_QDomNamedNodeMap* basecaster = basecasters_QDomNamedNodeMap[i];
            QDomNamedNodeMap* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QDomNamedNodeMap::getIdStatic()) {
            return (QDomNamedNodeMap*)vp;
          }

          qWarning() << "QDomNamedNodeMap::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QDomNamedNodeMap* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QDomNamedNodeMap*: wrapper wraps NULL";
          }

          QDomNamedNodeMap* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QDomNamedNodeMap*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QDomNamedNodeMap_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QDomNamedNodeMap_Wrapper(RJSApi& h, QDomNamedNodeMap* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QDomNamedNodeMap_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QDomNamedNodeMap
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QDomNamedNodeMap_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QDomNamedNodeMap
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomNamedNodeMap
    // Function: operator_equal
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_equal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNamedNodeMap
    // Function: operator_unequal
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_unequal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNamedNodeMap
    // Function: namedItem
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namedItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNamedNodeMap
    // Function: setNamedItem
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setNamedItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomNamedNodeMap
    // Function: removeNamedItem
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeNamedItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomNamedNodeMap
    // Function: item
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  item
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNamedNodeMap
    // Function: namedItemNS
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namedItemNS
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNamedNodeMap
    // Function: setNamedItemNS
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setNamedItemNS
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomNamedNodeMap
    // Function: removeNamedItemNS
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeNamedItemNS
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomNamedNodeMap
    // Function: length
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  length
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNamedNodeMap
    // Function: count
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  count
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNamedNodeMap
    // Function: size
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  size
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNamedNodeMap
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEmpty
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNamedNodeMap
    // Function: contains
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  contains
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QDomNamedNodeMap::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QDomNamedNodeMap* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QDomNamedNodeMap* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QDomNamedNodeMap* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QDomNamedNodeMap*> basecasters_QDomNamedNodeMap;

      public:
        static void registerBasecaster_QDomNamedNodeMap(RJSBasecaster_QDomNamedNodeMap* bc) {
          basecasters_QDomNamedNodeMap.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QDomNamedNodeMap_Wrapper*)

    Q_DECLARE_INTERFACE(QDomNamedNodeMap_Wrapper, "org.qcad.QDomNamedNodeMap_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QDomDocumentFragment>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QDomDocumentFragment
    class QDomDocumentFragment_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QDomDocumentFragment_Wrapper(const QDomDocumentFragment_Wrapper&);

    public:
      // initialization of QDomDocumentFragment:
      static void init(RJSApi& handler);

      
        static QDomDocumentFragment* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QDomDocumentFragment.length(); i++) {
            RJSBasecaster_QDomDocumentFragment* basecaster = basecasters_QDomDocumentFragment[i];
            QDomDocumentFragment* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QDomDocumentFragment::getIdStatic()) {
            return (QDomDocumentFragment*)vp;
          }

          qWarning() << "QDomDocumentFragment::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QDomDocumentFragment* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QDomDocumentFragment*: wrapper wraps NULL";
          }

          QDomDocumentFragment* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QDomDocumentFragment*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum NodeType {
    ElementNode = QDomDocumentFragment::ElementNode,
AttributeNode = QDomDocumentFragment::AttributeNode,
TextNode = QDomDocumentFragment::TextNode,
CDATASectionNode = QDomDocumentFragment::CDATASectionNode,
EntityReferenceNode = QDomDocumentFragment::EntityReferenceNode,
EntityNode = QDomDocumentFragment::EntityNode,
ProcessingInstructionNode = QDomDocumentFragment::ProcessingInstructionNode,
CommentNode = QDomDocumentFragment::CommentNode,
DocumentNode = QDomDocumentFragment::DocumentNode,
DocumentTypeNode = QDomDocumentFragment::DocumentTypeNode,
DocumentFragmentNode = QDomDocumentFragment::DocumentFragmentNode,
NotationNode = QDomDocumentFragment::NotationNode,
BaseNode = QDomDocumentFragment::BaseNode,
CharacterDataNode = QDomDocumentFragment::CharacterDataNode,

  };
  Q_ENUM(NodeType)

  enum EncodingPolicy {
    EncodingFromDocument = QDomDocumentFragment::EncodingFromDocument,
EncodingFromTextStream = QDomDocumentFragment::EncodingFromTextStream,

  };
  Q_ENUM(EncodingPolicy)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QDomDocumentFragment_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QDomDocumentFragment_Wrapper(RJSApi& h, QDomDocumentFragment* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QDomDocumentFragment_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QDomDocumentFragment
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QDomDocumentFragment_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QDomDocumentFragment
    // Function: operator_equal
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_equal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: operator_unequal
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_unequal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: insertBefore
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertBefore
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: insertAfter
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertAfter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: replaceChild
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  replaceChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: removeChild
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: appendChild
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  appendChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: hasChildNodes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasChildNodes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: cloneNode
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cloneNode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: normalize
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  normalize
              (

                
              )
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: isSupported
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSupported
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: nodeName
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: parentNode
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  parentNode
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: childNodes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  childNodes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: firstChild
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  firstChild
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: lastChild
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastChild
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: previousSibling
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  previousSibling
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: nextSibling
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextSibling
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: attributes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  attributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: ownerDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ownerDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: namespaceURI
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namespaceURI
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: localName
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  localName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: hasAttributes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasAttributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: nodeValue
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeValue
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: setNodeValue
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setNodeValue
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: prefix
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  prefix
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: setPrefix
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPrefix
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: isAttr
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAttr
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: isCDATASection
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCDATASection
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: isDocumentFragment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocumentFragment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: isDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: isDocumentType
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocumentType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: isElement
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: isEntityReference
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEntityReference
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: isText
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isText
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: isEntity
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: isNotation
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: isProcessingInstruction
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isProcessingInstruction
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: isCharacterData
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCharacterData
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: isComment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isComment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: namedItem
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namedItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: isNull
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNull
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: clear
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clear
              (

                
              )
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: toAttr
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toAttr
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: toCDATASection
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCDATASection
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: toDocumentFragment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocumentFragment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: toDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: toDocumentType
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocumentType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: toElement
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: toEntityReference
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toEntityReference
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: toText
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toText
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: toEntity
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: toNotation
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toNotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: toProcessingInstruction
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toProcessingInstruction
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: toCharacterData
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCharacterData
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: toComment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toComment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: firstChildElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  firstChildElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: lastChildElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastChildElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: previousSiblingElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  previousSiblingElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: nextSiblingElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextSiblingElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: lineNumber
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lineNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: columnNumber
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  columnNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomDocumentFragment
    // Function: nodeType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeType
              (

                
              )
              
                const
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QDomDocumentFragment::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QDomDocumentFragment* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QDomDocumentFragment* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QDomDocumentFragment* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QDomDocumentFragment*> basecasters_QDomDocumentFragment;

      public:
        static void registerBasecaster_QDomDocumentFragment(RJSBasecaster_QDomDocumentFragment* bc) {
          basecasters_QDomDocumentFragment.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QDomDocumentFragment_Wrapper*)

    Q_DECLARE_INTERFACE(QDomDocumentFragment_Wrapper, "org.qcad.QDomDocumentFragment_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QDomCharacterData>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QDomCharacterData
    class QDomCharacterData_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QDomCharacterData_Wrapper(const QDomCharacterData_Wrapper&);

    public:
      // initialization of QDomCharacterData:
      static void init(RJSApi& handler);

      
        static QDomCharacterData* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            
              if (t==RJSType_QDomText::getIdStatic()) {
                return (QDomCharacterData*)(QDomText*)vp;
              }
              
              if (t==RJSType_QDomComment::getIdStatic()) {
                return (QDomCharacterData*)(QDomComment*)vp;
              }
              

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QDomCharacterData.length(); i++) {
            RJSBasecaster_QDomCharacterData* basecaster = basecasters_QDomCharacterData[i];
            QDomCharacterData* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QDomCharacterData::getIdStatic()) {
            return (QDomCharacterData*)vp;
          }

          qWarning() << "QDomCharacterData::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QDomCharacterData* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QDomCharacterData*: wrapper wraps NULL";
          }

          QDomCharacterData* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QDomCharacterData*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum NodeType {
    ElementNode = QDomCharacterData::ElementNode,
AttributeNode = QDomCharacterData::AttributeNode,
TextNode = QDomCharacterData::TextNode,
CDATASectionNode = QDomCharacterData::CDATASectionNode,
EntityReferenceNode = QDomCharacterData::EntityReferenceNode,
EntityNode = QDomCharacterData::EntityNode,
ProcessingInstructionNode = QDomCharacterData::ProcessingInstructionNode,
CommentNode = QDomCharacterData::CommentNode,
DocumentNode = QDomCharacterData::DocumentNode,
DocumentTypeNode = QDomCharacterData::DocumentTypeNode,
DocumentFragmentNode = QDomCharacterData::DocumentFragmentNode,
NotationNode = QDomCharacterData::NotationNode,
BaseNode = QDomCharacterData::BaseNode,
CharacterDataNode = QDomCharacterData::CharacterDataNode,

  };
  Q_ENUM(NodeType)

  enum EncodingPolicy {
    EncodingFromDocument = QDomCharacterData::EncodingFromDocument,
EncodingFromTextStream = QDomCharacterData::EncodingFromTextStream,

  };
  Q_ENUM(EncodingPolicy)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QDomCharacterData_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QDomCharacterData_Wrapper(RJSApi& h, QDomCharacterData* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QDomCharacterData_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QDomCharacterData
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QDomCharacterData_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QDomCharacterData
    // Function: operator_equal
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_equal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: operator_unequal
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_unequal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: insertBefore
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertBefore
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomCharacterData
    // Function: insertAfter
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertAfter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomCharacterData
    // Function: replaceChild
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  replaceChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomCharacterData
    // Function: removeChild
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomCharacterData
    // Function: appendChild
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  appendChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomCharacterData
    // Function: hasChildNodes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasChildNodes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: cloneNode
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cloneNode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: normalize
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  normalize
              (

                
              )
              
              ;
            
    // Class: QDomCharacterData
    // Function: isSupported
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSupported
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: nodeName
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: parentNode
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  parentNode
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: childNodes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  childNodes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: firstChild
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  firstChild
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: lastChild
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastChild
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: previousSibling
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  previousSibling
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: nextSibling
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextSibling
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: attributes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  attributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: ownerDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ownerDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: namespaceURI
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namespaceURI
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: localName
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  localName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: hasAttributes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasAttributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: nodeValue
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeValue
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: setNodeValue
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setNodeValue
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomCharacterData
    // Function: prefix
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  prefix
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: setPrefix
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPrefix
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomCharacterData
    // Function: isAttr
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAttr
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: isCDATASection
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCDATASection
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: isDocumentFragment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocumentFragment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: isDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: isDocumentType
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocumentType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: isElement
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: isEntityReference
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEntityReference
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: isText
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isText
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: isEntity
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: isNotation
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: isProcessingInstruction
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isProcessingInstruction
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: isCharacterData
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCharacterData
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: isComment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isComment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: namedItem
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namedItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: isNull
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNull
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: clear
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clear
              (

                
              )
              
              ;
            
    // Class: QDomCharacterData
    // Function: toAttr
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toAttr
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: toCDATASection
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCDATASection
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: toDocumentFragment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocumentFragment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: toDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: toDocumentType
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocumentType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: toElement
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: toEntityReference
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toEntityReference
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: toText
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toText
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: toEntity
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: toNotation
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toNotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: toProcessingInstruction
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toProcessingInstruction
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: toCharacterData
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCharacterData
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: toComment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toComment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: firstChildElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  firstChildElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: lastChildElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastChildElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: previousSiblingElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  previousSiblingElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: nextSiblingElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextSiblingElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: lineNumber
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lineNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: columnNumber
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  columnNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomCharacterData
    // Function: substringData
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  substringData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomCharacterData
    // Function: appendData
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  appendData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomCharacterData
    // Function: insertData
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomCharacterData
    // Function: deleteData
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  deleteData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomCharacterData
    // Function: replaceData
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  replaceData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomCharacterData
    // Function: length
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  length
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: data
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  data
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomCharacterData
    // Function: setData
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomCharacterData
    // Function: nodeType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeType
              (

                
              )
              
                const
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QDomCharacterData::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QDomCharacterData* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QDomCharacterData* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QDomCharacterData* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QDomCharacterData*> basecasters_QDomCharacterData;

      public:
        static void registerBasecaster_QDomCharacterData(RJSBasecaster_QDomCharacterData* bc) {
          basecasters_QDomCharacterData.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QDomCharacterData_Wrapper*)

    Q_DECLARE_INTERFACE(QDomCharacterData_Wrapper, "org.qcad.QDomCharacterData_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QDomAttr>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QDomAttr
    class QDomAttr_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QDomAttr_Wrapper(const QDomAttr_Wrapper&);

    public:
      // initialization of QDomAttr:
      static void init(RJSApi& handler);

      
        static QDomAttr* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QDomAttr.length(); i++) {
            RJSBasecaster_QDomAttr* basecaster = basecasters_QDomAttr[i];
            QDomAttr* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QDomAttr::getIdStatic()) {
            return (QDomAttr*)vp;
          }

          qWarning() << "QDomAttr::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QDomAttr* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QDomAttr*: wrapper wraps NULL";
          }

          QDomAttr* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QDomAttr*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum NodeType {
    ElementNode = QDomAttr::ElementNode,
AttributeNode = QDomAttr::AttributeNode,
TextNode = QDomAttr::TextNode,
CDATASectionNode = QDomAttr::CDATASectionNode,
EntityReferenceNode = QDomAttr::EntityReferenceNode,
EntityNode = QDomAttr::EntityNode,
ProcessingInstructionNode = QDomAttr::ProcessingInstructionNode,
CommentNode = QDomAttr::CommentNode,
DocumentNode = QDomAttr::DocumentNode,
DocumentTypeNode = QDomAttr::DocumentTypeNode,
DocumentFragmentNode = QDomAttr::DocumentFragmentNode,
NotationNode = QDomAttr::NotationNode,
BaseNode = QDomAttr::BaseNode,
CharacterDataNode = QDomAttr::CharacterDataNode,

  };
  Q_ENUM(NodeType)

  enum EncodingPolicy {
    EncodingFromDocument = QDomAttr::EncodingFromDocument,
EncodingFromTextStream = QDomAttr::EncodingFromTextStream,

  };
  Q_ENUM(EncodingPolicy)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QDomAttr_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QDomAttr_Wrapper(RJSApi& h, QDomAttr* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QDomAttr_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QDomAttr
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QDomAttr_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QDomAttr
    // Function: operator_equal
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_equal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: operator_unequal
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_unequal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: insertBefore
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertBefore
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomAttr
    // Function: insertAfter
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertAfter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomAttr
    // Function: replaceChild
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  replaceChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomAttr
    // Function: removeChild
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomAttr
    // Function: appendChild
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  appendChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomAttr
    // Function: hasChildNodes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasChildNodes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: cloneNode
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cloneNode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: normalize
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  normalize
              (

                
              )
              
              ;
            
    // Class: QDomAttr
    // Function: isSupported
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSupported
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: nodeName
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: parentNode
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  parentNode
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: childNodes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  childNodes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: firstChild
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  firstChild
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: lastChild
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastChild
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: previousSibling
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  previousSibling
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: nextSibling
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextSibling
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: attributes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  attributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: ownerDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ownerDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: namespaceURI
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namespaceURI
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: localName
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  localName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: hasAttributes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasAttributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: nodeValue
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeValue
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: setNodeValue
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setNodeValue
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomAttr
    // Function: prefix
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  prefix
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: setPrefix
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPrefix
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomAttr
    // Function: isAttr
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAttr
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: isCDATASection
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCDATASection
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: isDocumentFragment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocumentFragment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: isDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: isDocumentType
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocumentType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: isElement
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: isEntityReference
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEntityReference
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: isText
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isText
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: isEntity
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: isNotation
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: isProcessingInstruction
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isProcessingInstruction
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: isCharacterData
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCharacterData
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: isComment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isComment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: namedItem
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namedItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: isNull
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNull
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: clear
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clear
              (

                
              )
              
              ;
            
    // Class: QDomAttr
    // Function: toAttr
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toAttr
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: toCDATASection
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCDATASection
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: toDocumentFragment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocumentFragment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: toDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: toDocumentType
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocumentType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: toElement
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: toEntityReference
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toEntityReference
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: toText
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toText
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: toEntity
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: toNotation
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toNotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: toProcessingInstruction
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toProcessingInstruction
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: toCharacterData
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCharacterData
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: toComment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toComment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: firstChildElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  firstChildElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: lastChildElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastChildElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: previousSiblingElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  previousSiblingElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: nextSiblingElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextSiblingElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: lineNumber
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lineNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: columnNumber
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  columnNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomAttr
    // Function: name
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  name
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: specified
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  specified
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: ownerElement
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ownerElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: value
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  value
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomAttr
    // Function: setValue
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setValue
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomAttr
    // Function: nodeType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeType
              (

                
              )
              
                const
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QDomAttr::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QDomAttr* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QDomAttr* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QDomAttr* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QDomAttr*> basecasters_QDomAttr;

      public:
        static void registerBasecaster_QDomAttr(RJSBasecaster_QDomAttr* bc) {
          basecasters_QDomAttr.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QDomAttr_Wrapper*)

    Q_DECLARE_INTERFACE(QDomAttr_Wrapper, "org.qcad.QDomAttr_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QDomElement>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QDomElement
    class QDomElement_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QDomElement_Wrapper(const QDomElement_Wrapper&);

    public:
      // initialization of QDomElement:
      static void init(RJSApi& handler);

      
        static QDomElement* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QDomElement.length(); i++) {
            RJSBasecaster_QDomElement* basecaster = basecasters_QDomElement[i];
            QDomElement* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QDomElement::getIdStatic()) {
            return (QDomElement*)vp;
          }

          qWarning() << "QDomElement::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QDomElement* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QDomElement*: wrapper wraps NULL";
          }

          QDomElement* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QDomElement*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum NodeType {
    ElementNode = QDomElement::ElementNode,
AttributeNode = QDomElement::AttributeNode,
TextNode = QDomElement::TextNode,
CDATASectionNode = QDomElement::CDATASectionNode,
EntityReferenceNode = QDomElement::EntityReferenceNode,
EntityNode = QDomElement::EntityNode,
ProcessingInstructionNode = QDomElement::ProcessingInstructionNode,
CommentNode = QDomElement::CommentNode,
DocumentNode = QDomElement::DocumentNode,
DocumentTypeNode = QDomElement::DocumentTypeNode,
DocumentFragmentNode = QDomElement::DocumentFragmentNode,
NotationNode = QDomElement::NotationNode,
BaseNode = QDomElement::BaseNode,
CharacterDataNode = QDomElement::CharacterDataNode,

  };
  Q_ENUM(NodeType)

  enum EncodingPolicy {
    EncodingFromDocument = QDomElement::EncodingFromDocument,
EncodingFromTextStream = QDomElement::EncodingFromTextStream,

  };
  Q_ENUM(EncodingPolicy)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QDomElement_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QDomElement_Wrapper(RJSApi& h, QDomElement* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QDomElement_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QDomElement
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QDomElement_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QDomElement
    // Function: operator_equal
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_equal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: operator_unequal
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_unequal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: insertBefore
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertBefore
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomElement
    // Function: insertAfter
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertAfter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomElement
    // Function: replaceChild
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  replaceChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomElement
    // Function: removeChild
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomElement
    // Function: appendChild
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  appendChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomElement
    // Function: hasChildNodes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasChildNodes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: cloneNode
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cloneNode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: normalize
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  normalize
              (

                
              )
              
              ;
            
    // Class: QDomElement
    // Function: isSupported
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSupported
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: nodeName
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: parentNode
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  parentNode
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: childNodes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  childNodes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: firstChild
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  firstChild
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: lastChild
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastChild
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: previousSibling
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  previousSibling
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: nextSibling
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextSibling
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: ownerDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ownerDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: namespaceURI
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namespaceURI
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: localName
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  localName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: hasAttributes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasAttributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: nodeValue
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeValue
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: setNodeValue
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setNodeValue
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomElement
    // Function: prefix
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  prefix
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: setPrefix
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPrefix
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomElement
    // Function: isAttr
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAttr
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: isCDATASection
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCDATASection
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: isDocumentFragment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocumentFragment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: isDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: isDocumentType
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocumentType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: isElement
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: isEntityReference
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEntityReference
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: isText
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isText
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: isEntity
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: isNotation
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: isProcessingInstruction
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isProcessingInstruction
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: isCharacterData
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCharacterData
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: isComment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isComment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: namedItem
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namedItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: isNull
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNull
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: clear
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clear
              (

                
              )
              
              ;
            
    // Class: QDomElement
    // Function: toAttr
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toAttr
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: toCDATASection
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCDATASection
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: toDocumentFragment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocumentFragment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: toDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: toDocumentType
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocumentType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: toElement
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: toEntityReference
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toEntityReference
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: toText
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toText
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: toEntity
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: toNotation
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toNotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: toProcessingInstruction
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toProcessingInstruction
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: toCharacterData
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCharacterData
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: toComment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toComment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: firstChildElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  firstChildElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: lastChildElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastChildElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: previousSiblingElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  previousSiblingElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: nextSiblingElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextSiblingElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: lineNumber
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lineNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: columnNumber
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  columnNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomElement
    // Function: attribute
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  attribute
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: setAttribute
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAttribute
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomElement
    // Function: removeAttribute
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeAttribute
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomElement
    // Function: attributeNode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  attributeNode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomElement
    // Function: setAttributeNode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAttributeNode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomElement
    // Function: removeAttributeNode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeAttributeNode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomElement
    // Function: elementsByTagName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  elementsByTagName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: hasAttribute
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasAttribute
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: attributeNS
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  attributeNS
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: setAttributeNS
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAttributeNS
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomElement
    // Function: removeAttributeNS
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeAttributeNS
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomElement
    // Function: attributeNodeNS
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  attributeNodeNS
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomElement
    // Function: setAttributeNodeNS
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAttributeNodeNS
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomElement
    // Function: elementsByTagNameNS
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  elementsByTagNameNS
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: hasAttributeNS
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasAttributeNS
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: tagName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  tagName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: setTagName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTagName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomElement
    // Function: attributes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  attributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: nodeType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomElement
    // Function: text
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  text
              (

                
              )
              
                const
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QDomElement::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QDomElement* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QDomElement* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QDomElement* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QDomElement*> basecasters_QDomElement;

      public:
        static void registerBasecaster_QDomElement(RJSBasecaster_QDomElement* bc) {
          basecasters_QDomElement.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QDomElement_Wrapper*)

    Q_DECLARE_INTERFACE(QDomElement_Wrapper, "org.qcad.QDomElement_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QDomText>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QDomText
    class QDomText_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QDomText_Wrapper(const QDomText_Wrapper&);

    public:
      // initialization of QDomText:
      static void init(RJSApi& handler);

      
        static QDomText* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            
              if (t==RJSType_QDomCDATASection::getIdStatic()) {
                return (QDomText*)(QDomCDATASection*)vp;
              }
              

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QDomText.length(); i++) {
            RJSBasecaster_QDomText* basecaster = basecasters_QDomText[i];
            QDomText* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QDomText::getIdStatic()) {
            return (QDomText*)vp;
          }

          qWarning() << "QDomText::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QDomText* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QDomText*: wrapper wraps NULL";
          }

          QDomText* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QDomText*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum NodeType {
    ElementNode = QDomText::ElementNode,
AttributeNode = QDomText::AttributeNode,
TextNode = QDomText::TextNode,
CDATASectionNode = QDomText::CDATASectionNode,
EntityReferenceNode = QDomText::EntityReferenceNode,
EntityNode = QDomText::EntityNode,
ProcessingInstructionNode = QDomText::ProcessingInstructionNode,
CommentNode = QDomText::CommentNode,
DocumentNode = QDomText::DocumentNode,
DocumentTypeNode = QDomText::DocumentTypeNode,
DocumentFragmentNode = QDomText::DocumentFragmentNode,
NotationNode = QDomText::NotationNode,
BaseNode = QDomText::BaseNode,
CharacterDataNode = QDomText::CharacterDataNode,

  };
  Q_ENUM(NodeType)

  enum EncodingPolicy {
    EncodingFromDocument = QDomText::EncodingFromDocument,
EncodingFromTextStream = QDomText::EncodingFromTextStream,

  };
  Q_ENUM(EncodingPolicy)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QDomText_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QDomText_Wrapper(RJSApi& h, QDomText* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QDomText_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QDomText
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QDomText_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QDomText
    // Function: operator_equal
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_equal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: operator_unequal
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_unequal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: insertBefore
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertBefore
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomText
    // Function: insertAfter
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertAfter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomText
    // Function: replaceChild
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  replaceChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomText
    // Function: removeChild
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomText
    // Function: appendChild
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  appendChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomText
    // Function: hasChildNodes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasChildNodes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: cloneNode
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cloneNode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: normalize
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  normalize
              (

                
              )
              
              ;
            
    // Class: QDomText
    // Function: isSupported
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSupported
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: nodeName
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: parentNode
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  parentNode
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: childNodes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  childNodes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: firstChild
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  firstChild
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: lastChild
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastChild
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: previousSibling
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  previousSibling
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: nextSibling
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextSibling
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: attributes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  attributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: ownerDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ownerDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: namespaceURI
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namespaceURI
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: localName
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  localName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: hasAttributes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasAttributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: nodeValue
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeValue
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: setNodeValue
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setNodeValue
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomText
    // Function: prefix
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  prefix
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: setPrefix
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPrefix
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomText
    // Function: isAttr
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAttr
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: isCDATASection
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCDATASection
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: isDocumentFragment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocumentFragment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: isDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: isDocumentType
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocumentType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: isElement
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: isEntityReference
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEntityReference
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: isText
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isText
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: isEntity
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: isNotation
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: isProcessingInstruction
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isProcessingInstruction
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: isCharacterData
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCharacterData
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: isComment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isComment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: namedItem
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namedItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: isNull
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNull
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: clear
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clear
              (

                
              )
              
              ;
            
    // Class: QDomText
    // Function: toAttr
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toAttr
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: toCDATASection
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCDATASection
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: toDocumentFragment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocumentFragment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: toDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: toDocumentType
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocumentType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: toElement
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: toEntityReference
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toEntityReference
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: toText
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toText
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: toEntity
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: toNotation
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toNotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: toProcessingInstruction
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toProcessingInstruction
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: toCharacterData
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCharacterData
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: toComment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toComment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: firstChildElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  firstChildElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: lastChildElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastChildElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: previousSiblingElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  previousSiblingElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: nextSiblingElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextSiblingElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: lineNumber
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lineNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: columnNumber
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  columnNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: substringData
    // Source: QDomCharacterData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  substringData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomText
    // Function: appendData
    // Source: QDomCharacterData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  appendData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomText
    // Function: insertData
    // Source: QDomCharacterData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomText
    // Function: deleteData
    // Source: QDomCharacterData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  deleteData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomText
    // Function: replaceData
    // Source: QDomCharacterData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  replaceData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomText
    // Function: length
    // Source: QDomCharacterData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  length
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: data
    // Source: QDomCharacterData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  data
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomText
    // Function: setData
    // Source: QDomCharacterData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomText
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomText
    // Function: splitText
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  splitText
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomText
    // Function: nodeType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeType
              (

                
              )
              
                const
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QDomText::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QDomText* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QDomText* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QDomText* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QDomText*> basecasters_QDomText;

      public:
        static void registerBasecaster_QDomText(RJSBasecaster_QDomText* bc) {
          basecasters_QDomText.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QDomText_Wrapper*)

    Q_DECLARE_INTERFACE(QDomText_Wrapper, "org.qcad.QDomText_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QDomComment>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QDomComment
    class QDomComment_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QDomComment_Wrapper(const QDomComment_Wrapper&);

    public:
      // initialization of QDomComment:
      static void init(RJSApi& handler);

      
        static QDomComment* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QDomComment.length(); i++) {
            RJSBasecaster_QDomComment* basecaster = basecasters_QDomComment[i];
            QDomComment* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QDomComment::getIdStatic()) {
            return (QDomComment*)vp;
          }

          qWarning() << "QDomComment::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QDomComment* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QDomComment*: wrapper wraps NULL";
          }

          QDomComment* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QDomComment*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QDomComment_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QDomComment_Wrapper(RJSApi& h, QDomComment* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QDomComment_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QDomComment
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QDomComment_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QDomComment
    // Function: substringData
    // Source: QDomCharacterData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  substringData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomComment
    // Function: appendData
    // Source: QDomCharacterData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  appendData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomComment
    // Function: insertData
    // Source: QDomCharacterData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomComment
    // Function: deleteData
    // Source: QDomCharacterData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  deleteData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomComment
    // Function: replaceData
    // Source: QDomCharacterData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  replaceData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomComment
    // Function: length
    // Source: QDomCharacterData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  length
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomComment
    // Function: data
    // Source: QDomCharacterData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  data
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomComment
    // Function: setData
    // Source: QDomCharacterData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomComment
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomComment
    // Function: nodeType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeType
              (

                
              )
              
                const
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QDomComment::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QDomComment* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QDomComment* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QDomComment* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QDomComment*> basecasters_QDomComment;

      public:
        static void registerBasecaster_QDomComment(RJSBasecaster_QDomComment* bc) {
          basecasters_QDomComment.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QDomComment_Wrapper*)

    Q_DECLARE_INTERFACE(QDomComment_Wrapper, "org.qcad.QDomComment_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QDomCDATASection>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QDomCDATASection
    class QDomCDATASection_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QDomCDATASection_Wrapper(const QDomCDATASection_Wrapper&);

    public:
      // initialization of QDomCDATASection:
      static void init(RJSApi& handler);

      
        static QDomCDATASection* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QDomCDATASection.length(); i++) {
            RJSBasecaster_QDomCDATASection* basecaster = basecasters_QDomCDATASection[i];
            QDomCDATASection* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QDomCDATASection::getIdStatic()) {
            return (QDomCDATASection*)vp;
          }

          qWarning() << "QDomCDATASection::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QDomCDATASection* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QDomCDATASection*: wrapper wraps NULL";
          }

          QDomCDATASection* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QDomCDATASection*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QDomCDATASection_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QDomCDATASection_Wrapper(RJSApi& h, QDomCDATASection* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QDomCDATASection_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QDomCDATASection
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QDomCDATASection_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QDomCDATASection
    // Function: splitText
    // Source: QDomText
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  splitText
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomCDATASection
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomCDATASection
    // Function: nodeType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeType
              (

                
              )
              
                const
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QDomCDATASection::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QDomCDATASection* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QDomCDATASection* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QDomCDATASection* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QDomCDATASection*> basecasters_QDomCDATASection;

      public:
        static void registerBasecaster_QDomCDATASection(RJSBasecaster_QDomCDATASection* bc) {
          basecasters_QDomCDATASection.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QDomCDATASection_Wrapper*)

    Q_DECLARE_INTERFACE(QDomCDATASection_Wrapper, "org.qcad.QDomCDATASection_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QDomNotation>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QDomNotation
    class QDomNotation_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QDomNotation_Wrapper(const QDomNotation_Wrapper&);

    public:
      // initialization of QDomNotation:
      static void init(RJSApi& handler);

      
        static QDomNotation* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QDomNotation.length(); i++) {
            RJSBasecaster_QDomNotation* basecaster = basecasters_QDomNotation[i];
            QDomNotation* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QDomNotation::getIdStatic()) {
            return (QDomNotation*)vp;
          }

          qWarning() << "QDomNotation::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QDomNotation* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QDomNotation*: wrapper wraps NULL";
          }

          QDomNotation* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QDomNotation*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum NodeType {
    ElementNode = QDomNotation::ElementNode,
AttributeNode = QDomNotation::AttributeNode,
TextNode = QDomNotation::TextNode,
CDATASectionNode = QDomNotation::CDATASectionNode,
EntityReferenceNode = QDomNotation::EntityReferenceNode,
EntityNode = QDomNotation::EntityNode,
ProcessingInstructionNode = QDomNotation::ProcessingInstructionNode,
CommentNode = QDomNotation::CommentNode,
DocumentNode = QDomNotation::DocumentNode,
DocumentTypeNode = QDomNotation::DocumentTypeNode,
DocumentFragmentNode = QDomNotation::DocumentFragmentNode,
NotationNode = QDomNotation::NotationNode,
BaseNode = QDomNotation::BaseNode,
CharacterDataNode = QDomNotation::CharacterDataNode,

  };
  Q_ENUM(NodeType)

  enum EncodingPolicy {
    EncodingFromDocument = QDomNotation::EncodingFromDocument,
EncodingFromTextStream = QDomNotation::EncodingFromTextStream,

  };
  Q_ENUM(EncodingPolicy)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QDomNotation_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QDomNotation_Wrapper(RJSApi& h, QDomNotation* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QDomNotation_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QDomNotation
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QDomNotation_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QDomNotation
    // Function: operator_equal
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_equal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: operator_unequal
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_unequal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: insertBefore
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertBefore
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomNotation
    // Function: insertAfter
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertAfter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomNotation
    // Function: replaceChild
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  replaceChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomNotation
    // Function: removeChild
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomNotation
    // Function: appendChild
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  appendChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomNotation
    // Function: hasChildNodes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasChildNodes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: cloneNode
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cloneNode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: normalize
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  normalize
              (

                
              )
              
              ;
            
    // Class: QDomNotation
    // Function: isSupported
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSupported
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: nodeName
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: parentNode
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  parentNode
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: childNodes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  childNodes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: firstChild
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  firstChild
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: lastChild
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastChild
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: previousSibling
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  previousSibling
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: nextSibling
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextSibling
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: attributes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  attributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: ownerDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ownerDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: namespaceURI
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namespaceURI
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: localName
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  localName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: hasAttributes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasAttributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: nodeValue
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeValue
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: setNodeValue
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setNodeValue
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomNotation
    // Function: prefix
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  prefix
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: setPrefix
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPrefix
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomNotation
    // Function: isAttr
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAttr
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: isCDATASection
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCDATASection
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: isDocumentFragment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocumentFragment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: isDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: isDocumentType
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocumentType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: isElement
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: isEntityReference
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEntityReference
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: isText
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isText
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: isEntity
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: isNotation
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: isProcessingInstruction
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isProcessingInstruction
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: isCharacterData
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCharacterData
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: isComment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isComment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: namedItem
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namedItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: isNull
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNull
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: clear
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clear
              (

                
              )
              
              ;
            
    // Class: QDomNotation
    // Function: toAttr
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toAttr
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: toCDATASection
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCDATASection
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: toDocumentFragment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocumentFragment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: toDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: toDocumentType
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocumentType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: toElement
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: toEntityReference
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toEntityReference
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: toText
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toText
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: toEntity
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: toNotation
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toNotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: toProcessingInstruction
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toProcessingInstruction
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: toCharacterData
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCharacterData
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: toComment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toComment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: firstChildElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  firstChildElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: lastChildElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastChildElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: previousSiblingElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  previousSiblingElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: nextSiblingElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextSiblingElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: lineNumber
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lineNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: columnNumber
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  columnNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomNotation
    // Function: publicId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  publicId
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: systemId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  systemId
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomNotation
    // Function: nodeType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeType
              (

                
              )
              
                const
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QDomNotation::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QDomNotation* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QDomNotation* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QDomNotation* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QDomNotation*> basecasters_QDomNotation;

      public:
        static void registerBasecaster_QDomNotation(RJSBasecaster_QDomNotation* bc) {
          basecasters_QDomNotation.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QDomNotation_Wrapper*)

    Q_DECLARE_INTERFACE(QDomNotation_Wrapper, "org.qcad.QDomNotation_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QDomEntity>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QDomEntity
    class QDomEntity_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QDomEntity_Wrapper(const QDomEntity_Wrapper&);

    public:
      // initialization of QDomEntity:
      static void init(RJSApi& handler);

      
        static QDomEntity* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QDomEntity.length(); i++) {
            RJSBasecaster_QDomEntity* basecaster = basecasters_QDomEntity[i];
            QDomEntity* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QDomEntity::getIdStatic()) {
            return (QDomEntity*)vp;
          }

          qWarning() << "QDomEntity::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QDomEntity* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QDomEntity*: wrapper wraps NULL";
          }

          QDomEntity* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QDomEntity*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum NodeType {
    ElementNode = QDomEntity::ElementNode,
AttributeNode = QDomEntity::AttributeNode,
TextNode = QDomEntity::TextNode,
CDATASectionNode = QDomEntity::CDATASectionNode,
EntityReferenceNode = QDomEntity::EntityReferenceNode,
EntityNode = QDomEntity::EntityNode,
ProcessingInstructionNode = QDomEntity::ProcessingInstructionNode,
CommentNode = QDomEntity::CommentNode,
DocumentNode = QDomEntity::DocumentNode,
DocumentTypeNode = QDomEntity::DocumentTypeNode,
DocumentFragmentNode = QDomEntity::DocumentFragmentNode,
NotationNode = QDomEntity::NotationNode,
BaseNode = QDomEntity::BaseNode,
CharacterDataNode = QDomEntity::CharacterDataNode,

  };
  Q_ENUM(NodeType)

  enum EncodingPolicy {
    EncodingFromDocument = QDomEntity::EncodingFromDocument,
EncodingFromTextStream = QDomEntity::EncodingFromTextStream,

  };
  Q_ENUM(EncodingPolicy)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QDomEntity_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QDomEntity_Wrapper(RJSApi& h, QDomEntity* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QDomEntity_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QDomEntity
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QDomEntity_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QDomEntity
    // Function: operator_equal
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_equal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: operator_unequal
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_unequal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: insertBefore
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertBefore
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomEntity
    // Function: insertAfter
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertAfter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomEntity
    // Function: replaceChild
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  replaceChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomEntity
    // Function: removeChild
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomEntity
    // Function: appendChild
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  appendChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomEntity
    // Function: hasChildNodes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasChildNodes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: cloneNode
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cloneNode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: normalize
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  normalize
              (

                
              )
              
              ;
            
    // Class: QDomEntity
    // Function: isSupported
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSupported
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: nodeName
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: parentNode
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  parentNode
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: childNodes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  childNodes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: firstChild
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  firstChild
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: lastChild
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastChild
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: previousSibling
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  previousSibling
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: nextSibling
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextSibling
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: attributes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  attributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: ownerDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ownerDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: namespaceURI
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namespaceURI
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: localName
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  localName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: hasAttributes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasAttributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: nodeValue
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeValue
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: setNodeValue
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setNodeValue
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomEntity
    // Function: prefix
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  prefix
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: setPrefix
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPrefix
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomEntity
    // Function: isAttr
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAttr
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: isCDATASection
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCDATASection
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: isDocumentFragment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocumentFragment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: isDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: isDocumentType
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocumentType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: isElement
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: isEntityReference
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEntityReference
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: isText
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isText
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: isEntity
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: isNotation
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: isProcessingInstruction
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isProcessingInstruction
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: isCharacterData
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCharacterData
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: isComment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isComment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: namedItem
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namedItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: isNull
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNull
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: clear
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clear
              (

                
              )
              
              ;
            
    // Class: QDomEntity
    // Function: toAttr
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toAttr
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: toCDATASection
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCDATASection
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: toDocumentFragment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocumentFragment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: toDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: toDocumentType
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocumentType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: toElement
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: toEntityReference
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toEntityReference
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: toText
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toText
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: toEntity
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: toNotation
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toNotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: toProcessingInstruction
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toProcessingInstruction
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: toCharacterData
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCharacterData
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: toComment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toComment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: firstChildElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  firstChildElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: lastChildElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastChildElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: previousSiblingElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  previousSiblingElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: nextSiblingElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextSiblingElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: lineNumber
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lineNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: columnNumber
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  columnNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomEntity
    // Function: publicId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  publicId
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: systemId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  systemId
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: notationName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  notationName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntity
    // Function: nodeType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeType
              (

                
              )
              
                const
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QDomEntity::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QDomEntity* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QDomEntity* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QDomEntity* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QDomEntity*> basecasters_QDomEntity;

      public:
        static void registerBasecaster_QDomEntity(RJSBasecaster_QDomEntity* bc) {
          basecasters_QDomEntity.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QDomEntity_Wrapper*)

    Q_DECLARE_INTERFACE(QDomEntity_Wrapper, "org.qcad.QDomEntity_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QDomEntityReference>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QDomEntityReference
    class QDomEntityReference_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QDomEntityReference_Wrapper(const QDomEntityReference_Wrapper&);

    public:
      // initialization of QDomEntityReference:
      static void init(RJSApi& handler);

      
        static QDomEntityReference* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QDomEntityReference.length(); i++) {
            RJSBasecaster_QDomEntityReference* basecaster = basecasters_QDomEntityReference[i];
            QDomEntityReference* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QDomEntityReference::getIdStatic()) {
            return (QDomEntityReference*)vp;
          }

          qWarning() << "QDomEntityReference::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QDomEntityReference* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QDomEntityReference*: wrapper wraps NULL";
          }

          QDomEntityReference* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QDomEntityReference*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum NodeType {
    ElementNode = QDomEntityReference::ElementNode,
AttributeNode = QDomEntityReference::AttributeNode,
TextNode = QDomEntityReference::TextNode,
CDATASectionNode = QDomEntityReference::CDATASectionNode,
EntityReferenceNode = QDomEntityReference::EntityReferenceNode,
EntityNode = QDomEntityReference::EntityNode,
ProcessingInstructionNode = QDomEntityReference::ProcessingInstructionNode,
CommentNode = QDomEntityReference::CommentNode,
DocumentNode = QDomEntityReference::DocumentNode,
DocumentTypeNode = QDomEntityReference::DocumentTypeNode,
DocumentFragmentNode = QDomEntityReference::DocumentFragmentNode,
NotationNode = QDomEntityReference::NotationNode,
BaseNode = QDomEntityReference::BaseNode,
CharacterDataNode = QDomEntityReference::CharacterDataNode,

  };
  Q_ENUM(NodeType)

  enum EncodingPolicy {
    EncodingFromDocument = QDomEntityReference::EncodingFromDocument,
EncodingFromTextStream = QDomEntityReference::EncodingFromTextStream,

  };
  Q_ENUM(EncodingPolicy)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QDomEntityReference_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QDomEntityReference_Wrapper(RJSApi& h, QDomEntityReference* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QDomEntityReference_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QDomEntityReference
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QDomEntityReference_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QDomEntityReference
    // Function: operator_equal
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_equal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: operator_unequal
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_unequal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: insertBefore
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertBefore
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomEntityReference
    // Function: insertAfter
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertAfter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomEntityReference
    // Function: replaceChild
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  replaceChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomEntityReference
    // Function: removeChild
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomEntityReference
    // Function: appendChild
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  appendChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomEntityReference
    // Function: hasChildNodes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasChildNodes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: cloneNode
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cloneNode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: normalize
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  normalize
              (

                
              )
              
              ;
            
    // Class: QDomEntityReference
    // Function: isSupported
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSupported
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: nodeName
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: parentNode
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  parentNode
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: childNodes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  childNodes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: firstChild
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  firstChild
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: lastChild
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastChild
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: previousSibling
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  previousSibling
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: nextSibling
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextSibling
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: attributes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  attributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: ownerDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ownerDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: namespaceURI
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namespaceURI
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: localName
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  localName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: hasAttributes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasAttributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: nodeValue
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeValue
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: setNodeValue
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setNodeValue
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomEntityReference
    // Function: prefix
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  prefix
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: setPrefix
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPrefix
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomEntityReference
    // Function: isAttr
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAttr
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: isCDATASection
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCDATASection
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: isDocumentFragment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocumentFragment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: isDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: isDocumentType
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocumentType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: isElement
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: isEntityReference
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEntityReference
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: isText
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isText
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: isEntity
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: isNotation
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: isProcessingInstruction
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isProcessingInstruction
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: isCharacterData
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCharacterData
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: isComment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isComment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: namedItem
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namedItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: isNull
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNull
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: clear
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clear
              (

                
              )
              
              ;
            
    // Class: QDomEntityReference
    // Function: toAttr
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toAttr
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: toCDATASection
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCDATASection
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: toDocumentFragment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocumentFragment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: toDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: toDocumentType
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocumentType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: toElement
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: toEntityReference
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toEntityReference
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: toText
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toText
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: toEntity
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: toNotation
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toNotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: toProcessingInstruction
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toProcessingInstruction
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: toCharacterData
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCharacterData
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: toComment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toComment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: firstChildElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  firstChildElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: lastChildElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastChildElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: previousSiblingElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  previousSiblingElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: nextSiblingElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextSiblingElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: lineNumber
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lineNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: columnNumber
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  columnNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomEntityReference
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomEntityReference
    // Function: nodeType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeType
              (

                
              )
              
                const
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QDomEntityReference::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QDomEntityReference* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QDomEntityReference* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QDomEntityReference* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QDomEntityReference*> basecasters_QDomEntityReference;

      public:
        static void registerBasecaster_QDomEntityReference(RJSBasecaster_QDomEntityReference* bc) {
          basecasters_QDomEntityReference.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QDomEntityReference_Wrapper*)

    Q_DECLARE_INTERFACE(QDomEntityReference_Wrapper, "org.qcad.QDomEntityReference_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QDomProcessingInstruction>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QDomProcessingInstruction
    class QDomProcessingInstruction_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QDomProcessingInstruction_Wrapper(const QDomProcessingInstruction_Wrapper&);

    public:
      // initialization of QDomProcessingInstruction:
      static void init(RJSApi& handler);

      
        static QDomProcessingInstruction* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QDomProcessingInstruction.length(); i++) {
            RJSBasecaster_QDomProcessingInstruction* basecaster = basecasters_QDomProcessingInstruction[i];
            QDomProcessingInstruction* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QDomProcessingInstruction::getIdStatic()) {
            return (QDomProcessingInstruction*)vp;
          }

          qWarning() << "QDomProcessingInstruction::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QDomProcessingInstruction* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QDomProcessingInstruction*: wrapper wraps NULL";
          }

          QDomProcessingInstruction* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QDomProcessingInstruction*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum NodeType {
    ElementNode = QDomProcessingInstruction::ElementNode,
AttributeNode = QDomProcessingInstruction::AttributeNode,
TextNode = QDomProcessingInstruction::TextNode,
CDATASectionNode = QDomProcessingInstruction::CDATASectionNode,
EntityReferenceNode = QDomProcessingInstruction::EntityReferenceNode,
EntityNode = QDomProcessingInstruction::EntityNode,
ProcessingInstructionNode = QDomProcessingInstruction::ProcessingInstructionNode,
CommentNode = QDomProcessingInstruction::CommentNode,
DocumentNode = QDomProcessingInstruction::DocumentNode,
DocumentTypeNode = QDomProcessingInstruction::DocumentTypeNode,
DocumentFragmentNode = QDomProcessingInstruction::DocumentFragmentNode,
NotationNode = QDomProcessingInstruction::NotationNode,
BaseNode = QDomProcessingInstruction::BaseNode,
CharacterDataNode = QDomProcessingInstruction::CharacterDataNode,

  };
  Q_ENUM(NodeType)

  enum EncodingPolicy {
    EncodingFromDocument = QDomProcessingInstruction::EncodingFromDocument,
EncodingFromTextStream = QDomProcessingInstruction::EncodingFromTextStream,

  };
  Q_ENUM(EncodingPolicy)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QDomProcessingInstruction_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QDomProcessingInstruction_Wrapper(RJSApi& h, QDomProcessingInstruction* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QDomProcessingInstruction_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QDomProcessingInstruction
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QDomProcessingInstruction_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QDomProcessingInstruction
    // Function: operator_equal
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_equal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: operator_unequal
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_unequal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: insertBefore
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertBefore
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: insertAfter
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertAfter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: replaceChild
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  replaceChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: removeChild
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: appendChild
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  appendChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: hasChildNodes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasChildNodes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: cloneNode
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cloneNode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: normalize
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  normalize
              (

                
              )
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: isSupported
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSupported
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: nodeName
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: parentNode
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  parentNode
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: childNodes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  childNodes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: firstChild
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  firstChild
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: lastChild
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastChild
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: previousSibling
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  previousSibling
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: nextSibling
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextSibling
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: attributes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  attributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: ownerDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ownerDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: namespaceURI
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namespaceURI
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: localName
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  localName
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: hasAttributes
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasAttributes
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: nodeValue
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeValue
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: setNodeValue
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setNodeValue
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: prefix
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  prefix
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: setPrefix
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPrefix
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: isAttr
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAttr
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: isCDATASection
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCDATASection
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: isDocumentFragment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocumentFragment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: isDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: isDocumentType
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDocumentType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: isElement
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: isEntityReference
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEntityReference
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: isText
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isText
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: isEntity
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: isNotation
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: isProcessingInstruction
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isProcessingInstruction
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: isCharacterData
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCharacterData
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: isComment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isComment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: namedItem
    // Source: QDomNode
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  namedItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: isNull
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNull
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: clear
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clear
              (

                
              )
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: toAttr
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toAttr
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: toCDATASection
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCDATASection
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: toDocumentFragment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocumentFragment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: toDocument
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocument
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: toDocumentType
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDocumentType
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: toElement
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toElement
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: toEntityReference
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toEntityReference
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: toText
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toText
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: toEntity
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: toNotation
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toNotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: toProcessingInstruction
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toProcessingInstruction
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: toCharacterData
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCharacterData
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: toComment
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toComment
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: firstChildElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  firstChildElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: lastChildElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastChildElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: previousSiblingElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  previousSiblingElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: nextSiblingElement
    // Source: QDomNode
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextSiblingElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: lineNumber
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lineNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: columnNumber
    // Source: QDomNode
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  columnNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: target
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  target
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: data
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  data
              (

                
              )
              
                const
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: setData
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDomProcessingInstruction
    // Function: nodeType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nodeType
              (

                
              )
              
                const
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QDomProcessingInstruction::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QDomProcessingInstruction* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QDomProcessingInstruction* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QDomProcessingInstruction* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QDomProcessingInstruction*> basecasters_QDomProcessingInstruction;

      public:
        static void registerBasecaster_QDomProcessingInstruction(RJSBasecaster_QDomProcessingInstruction* bc) {
          basecasters_QDomProcessingInstruction.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QDomProcessingInstruction_Wrapper*)

    Q_DECLARE_INTERFACE(QDomProcessingInstruction_Wrapper, "org.qcad.QDomProcessingInstruction_Wrapper")

  
  #endif
  

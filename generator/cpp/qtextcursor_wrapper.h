
  // Auto generated
  
    #ifndef QTEXTCURSOR_H_WRAPPER
    #define QTEXTCURSOR_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QTextDocument>
      
        #include <QTextDocumentFragment>
      
        #include <QTextCharFormat>
      
        #include <QTextBlockFormat>
      
        #include <QTextListFormat>
      
        #include <QTextTableFormat>
      
        #include <QTextFrameFormat>
      
        #include <QTextImageFormat>
      
        #include <QTextList>
      
        #include <QTextTable>
      
        #include <QTextFrame>
      
        #include <QTextBlock>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QTextCursor>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QTextCursor
    class QTextCursor_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QTextCursor_Wrapper(const QTextCursor_Wrapper&);

    public:
      // initialization of QTextCursor:
      static void init(RJSApi& handler);

      
        static QTextCursor* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QTextCursor:
          for (int i=0; i<basecasters_QTextCursor.length(); i++) {
            RJSBasecaster_QTextCursor* basecaster = basecasters_QTextCursor[i];
            QTextCursor* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QTextCursor:
          if (t==RJSType_QTextCursor::getIdStatic()) {
            return (QTextCursor*)vp;
          }

          qWarning() << "QTextCursor_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QTextCursor* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QTextCursor*: wrapper wraps NULL";
          }

          QTextCursor* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QTextCursor*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum MoveMode {
    MoveAnchor = QTextCursor::MoveAnchor,
KeepAnchor = QTextCursor::KeepAnchor,

  };
  Q_ENUM(MoveMode)

  enum MoveOperation {
    NoMove = QTextCursor::NoMove,
Start = QTextCursor::Start,
Up = QTextCursor::Up,
StartOfLine = QTextCursor::StartOfLine,
StartOfBlock = QTextCursor::StartOfBlock,
StartOfWord = QTextCursor::StartOfWord,
PreviousBlock = QTextCursor::PreviousBlock,
PreviousCharacter = QTextCursor::PreviousCharacter,
PreviousWord = QTextCursor::PreviousWord,
Left = QTextCursor::Left,
WordLeft = QTextCursor::WordLeft,
End = QTextCursor::End,
Down = QTextCursor::Down,
EndOfLine = QTextCursor::EndOfLine,
EndOfWord = QTextCursor::EndOfWord,
EndOfBlock = QTextCursor::EndOfBlock,
NextBlock = QTextCursor::NextBlock,
NextCharacter = QTextCursor::NextCharacter,
NextWord = QTextCursor::NextWord,
Right = QTextCursor::Right,
WordRight = QTextCursor::WordRight,
NextCell = QTextCursor::NextCell,
PreviousCell = QTextCursor::PreviousCell,
NextRow = QTextCursor::NextRow,
PreviousRow = QTextCursor::PreviousRow,

  };
  Q_ENUM(MoveOperation)

  enum SelectionType {
    WordUnderCursor = QTextCursor::WordUnderCursor,
LineUnderCursor = QTextCursor::LineUnderCursor,
BlockUnderCursor = QTextCursor::BlockUnderCursor,
Document = QTextCursor::Document,

  };
  Q_ENUM(SelectionType)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QTextCursor_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QTextCursor_Wrapper(RJSApi& h, QTextCursor* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QTextCursor_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QTextCursor
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QTextCursor_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#ifndef QT_NO_TEXTHTMLPARSER

#endif


    // non-static functions:
    
    // Class: QTextCursor
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  swap
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCursor
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
            
    // Class: QTextCursor
    // Function: setPosition
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPosition
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
            
    // Class: QTextCursor
    // Function: position
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  position
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCursor
    // Function: positionInBlock
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  positionInBlock
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCursor
    // Function: anchor
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  anchor
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCursor
    // Function: insertText
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertText
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCursor
    // Function: movePosition
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  movePosition
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
            
    // Class: QTextCursor
    // Function: visualNavigation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  visualNavigation
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCursor
    // Function: setVisualNavigation
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setVisualNavigation
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCursor
    // Function: setVerticalMovementX
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setVerticalMovementX
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCursor
    // Function: verticalMovementX
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  verticalMovementX
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCursor
    // Function: setKeepPositionOnInsert
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setKeepPositionOnInsert
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCursor
    // Function: keepPositionOnInsert
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  keepPositionOnInsert
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCursor
    // Function: deleteChar
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  deleteChar
              (

                
              )
              
              ;
            
    // Class: QTextCursor
    // Function: deletePreviousChar
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  deletePreviousChar
              (

                
              )
              
              ;
            
    // Class: QTextCursor
    // Function: select
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  select
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCursor
    // Function: hasSelection
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasSelection
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCursor
    // Function: hasComplexSelection
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasComplexSelection
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCursor
    // Function: removeSelectedText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeSelectedText
              (

                
              )
              
              ;
            
    // Class: QTextCursor
    // Function: clearSelection
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearSelection
              (

                
              )
              
              ;
            
    // Class: QTextCursor
    // Function: selectionStart
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  selectionStart
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCursor
    // Function: selectionEnd
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  selectionEnd
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCursor
    // Function: selectedText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  selectedText
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCursor
    // Function: charFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  charFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCursor
    // Function: setCharFormat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCharFormat
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCursor
    // Function: mergeCharFormat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mergeCharFormat
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCursor
    // Function: blockFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  blockFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCursor
    // Function: setBlockFormat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBlockFormat
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCursor
    // Function: mergeBlockFormat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mergeBlockFormat
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCursor
    // Function: blockCharFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  blockCharFormat
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCursor
    // Function: setBlockCharFormat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBlockCharFormat
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCursor
    // Function: mergeBlockCharFormat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mergeBlockCharFormat
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QTextCursor
    // Function: atBlockStart
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  atBlockStart
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCursor
    // Function: atBlockEnd
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  atBlockEnd
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCursor
    // Function: atStart
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  atStart
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCursor
    // Function: atEnd
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  atEnd
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCursor
    // Function: insertBlock
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertBlock
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
            
#ifndef QT_NO_TEXTHTMLPARSER

    // Class: QTextCursor
    // Function: insertHtml
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertHtml
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#endif

    // Class: QTextCursor
    // Function: insertImage
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertImage
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
            
    // Class: QTextCursor
    // Function: beginEditBlock
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  beginEditBlock
              (

                
              )
              
              ;
            
    // Class: QTextCursor
    // Function: joinPreviousEditBlock
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  joinPreviousEditBlock
              (

                
              )
              
              ;
            
    // Class: QTextCursor
    // Function: endEditBlock
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  endEditBlock
              (

                
              )
              
              ;
            
    // Class: QTextCursor
    // Function: isCopyOf
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCopyOf
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QTextCursor
    // Function: blockNumber
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  blockNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QTextCursor
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
            
    // Class: QTextCursor
    // Function: document
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  document
              (

                
              )
              
                const
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

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
          return RJSType_QTextCursor::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QTextCursor* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QTextCursor* getWrapped() const {
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
        QTextCursor* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QTextCursor*> basecasters_QTextCursor;

      public:
        static void registerBasecaster_QTextCursor(RJSBasecaster_QTextCursor* bc) {
          basecasters_QTextCursor.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QTextCursor_Wrapper*)

    Q_DECLARE_INTERFACE(QTextCursor_Wrapper, "org.qcad.QTextCursor_Wrapper")

  
  #endif
  

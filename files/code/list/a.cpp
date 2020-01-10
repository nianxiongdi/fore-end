# include <stdio.h>
// # include <malloc.h>
# include <stdlib.h>

typedef struct Node
{
    int data;//数据域
    struct Node * pNxt;//指针域
}NODE,*PNODE;//NODE等价于struct Node     PNODE等价于struct * Node 

PNODE create_list(void);//创建一个非循环单链表
void  traverse_list(PNODE   pHead);//便利输出
bool is_empty(PNODE pHead );//判断是否为空
int length_list(PNODE pHead);//判断链表的长度
void sort_list(PNODE pHead);//对链表进行排序
PNODE insert_list(PNODE pHead,int i,int val);//插入某个位置
PNODE delete_list(PNODE pHead,int i);//删除某个位置

int main()
{
    PNODE pHead=NULL;//等价于struct * Node=NULL

    pHead=create_list();

//  traverse_list(pHead);


    /*
    if( is_empty(pHead) )
        printf("链表为空!\n");
    else
    printf("链表不为空!\n");
    */


    /*
    int len;
    len=length_list(pHead);
    printf("%d",len);
    */

//  sort_list(pHead);
//traverse_list(pHead);

//pHead = insert_list(pHead,2,55);
//traverse_list(pHead);

pHead = delete_list(pHead,3);
traverse_list(pHead);



    return 0;
}

PNODE create_list(void)
{
    int i,val,len;

    printf("请输入节点的个数:");
    scanf("%d",&len);
    printf("\n");

    PNODE pHead = (PNODE)malloc(sizeof(NODE));//定义变量时，别忘了加数据类型 PNODE
           if(pHead->pNxt==NULL)
            {
                printf("动态内存分配失败!\n");
                exit(-1);
            }

    PNODE pTail=pHead;//pTail总是指向最后一个节点
       pTail->pNxt=NULL;//pTail和pHead指向同一个内存空间,即头节点,他的指针域应为NULL，因为pTail指向最后一个节点

    for(i=0;i<len;i++)
    {
        printf("请输入第%d个节点的值:",i+1);
        scanf("%d",&val);
            PNODE  pNEW = (PNODE)malloc(sizeof(NODE));//别忘了加sizeof
            if(pNEW->pNxt==NULL)
            {
                printf("动态内存分配失败!\n");
                exit(-1);
            }

            pNEW->data=val;
            pTail->pNxt=pNEW;//把pNEW挂到pTail的后面,pTail总是指向最后一个节点,但是pTail还是指向之前的内存
            pNEW->pNxt=NULL;//pNEW成为最后一个节点,所以为NULL
            pTail=pNEW;//使pTail指向尾指针域
    }

    return pHead;
}

void traverse_list(PNODE pHead)
{
    int i=1;
     PNODE p = (PNODE)malloc(sizeof(NODE));
         p=pHead;
        p = p->pNxt;//使p指向首节点
     while(p!=NULL)
     {
         printf("第%d个节点的值:%d\n",i,p->data);
            p=p->pNxt;//使p向后移动一个节点
             i++;
     }
//printf("第%d个节点的值:%d\n",i,p->data);
}

bool is_empty(PNODE pHead)
{
    if( NULL==pHead->pNxt )
        return true;
    else 
        return false;
}

int length_list(PNODE pHead)
{
         int cnt=0;
      PNODE p=pHead->pNxt;
         while(NULL!=p)
         {
             cnt++;
             p=p->pNxt;
         }

         return cnt;
}

void sort_list(PNODE  pHead)
{
    int i,j,t;

    int len = length_list(pHead);
    PNODE p,q;//这里只需定义两个结构体变量，不需要给这两个指针动态分配内存.


    for(i=0,p=pHead->pNxt;i<len-1;p=p->pNxt,i++)    // for(i=0;i<len-1;i++)
        for(j=i+1,q=p->pNxt;j<len;q=q->pNxt,j++)  //for(j=i+1;j<len;j++)
        {
               if(p->data>q->data)//if(a[i]>a[j])
            {
                t = p->data;//t=a[i];
                p->data = q->data;  //a[i]=a[j];
                 q->data = t ;        //a[j]=t;
            }
        }
}

PNODE insert_list(PNODE pHead,int i,int val)
{
           int len = length_list(pHead);
           if(i>len+1||i<1)
           {
               printf("此位置无法插入!");
               exit(-1);
           }
    //if(pHead->pNxt)
    PNODE p=(PNODE)malloc(sizeof(NODE));//所要插入的元素
              if(p->pNxt==NULL)
            {
                printf("动态内存分配失败!\n");
                exit(-1);
            }
    p->data=val;

    PNODE ps;//使此指针指向i前面的一个有效元素
    // ps=(PNODE)malloc(sizeof(NODE));
        ps=pHead;

    for(int j=0;j<i-1;j++)//此循环是让ps指向第i个有效元素的前面
    {

          ps=ps->pNxt;
    }

    p->pNxt=ps->pNxt;
    ps->pNxt=p;

    return pHead;

}
/*
  bool insert_list(PNODE pHead,int i,int val)
  {
     int j=0;

  PNODE p=pHead;

           while(j<i-1&&p!=NULL)
           {
                  j++;
                  p=p->pNxt;
           }

          if(p==NULL)
             return false;
          else
          {
             ps=(PNODE)malloc(NODE);
             if(ps==NULL)
             {
                printf("动态内存分配失败!\n");
                exit(-1);
             }
             else
             {
               ps->data=val;
                ps->pNxt=p->pNxt;
                  p->pNxt=ps;

              return true;
             }

          }
  }
*/

PNODE delete_list(PNODE pHead,int i)//删除某个位置
{
  int len = length_list(pHead);
           if(i>len||i<1)
           {
               printf("此位置不在链表中，无法删除!");
               exit(-1);
           }
    PNODE ps;
        ps=pHead;

    for(int j=0;j<i-1;j++)//此循环是让ps指向第i个有效元素的前面
    {

          ps=ps->pNxt;
    }

            PNODE p;
            p=ps;

               ps->pNxt=ps->pNxt->pNxt;


        p=p->pNxt;
        free(p);


    return pHead;

}

/*

 bool delete_list(PNODE pHead,int i,int val)
  {
     int j=0;

  PNODE ps=pHead;

           while(j<i-1&&ps!=NULL)
           {
                  j++;
                  ps=ps->pNxt;
           }

          if(ps==NULL)
             return false;

             PNODE p;
            p=ps;

              ps->pNxt=ps->pNxt->pNxt;

                p=p->pNst;
                free(p);

              return true;


          }









*/

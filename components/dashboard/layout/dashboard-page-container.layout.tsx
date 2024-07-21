"use client";
import { ReactNode } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSheetState, useDialogState } from "@/store";

type PageContainerProps = { title?: string; children: ReactNode };

export const DashboardPageContainer = ({
  title: pageTitle,
  children,
}: PageContainerProps): JSX.Element => {
  const {
    isOpen: isSheetOpen,
    setOpen: setSheetOpen,
    title: sheetTitle,
    content: sheetContent,
    description: sheetDescription,
  } = useSheetState((state) => state);

  const {
    isOpen: isDialogOpen,
    setOpen: setDialogOpen,
    title: dialogTitle,
    content: dialogContent,
    description: dialogDescription,
  } = useDialogState((state) => state);

  return (
    <div>
      {/* sheet */}
      <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent className="overflow-y-scroll">
          <SheetHeader>
            <SheetTitle>{sheetTitle}</SheetTitle>
            <SheetDescription className="py-4">
              {sheetDescription}
            </SheetDescription>
          </SheetHeader>
          <div>{sheetContent}</div>
        </SheetContent>
      </Sheet>

      {/* dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogDescription>{dialogDescription}</DialogDescription>
          </DialogHeader>
          {dialogContent}
        </DialogContent>
      </Dialog>

      {/* page */}
      <section className="px-12">
        {/* title */}
        {pageTitle && (
          <h1 className="text-3xl font-bold text-gray-800">{pageTitle}</h1>
        )}
        {/* content */}
        <div className="">{children}</div>
      </section>
    </div>
  );
};

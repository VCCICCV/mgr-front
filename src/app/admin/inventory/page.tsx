import React from 'react'

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SKUTable } from '@/components/admin/inventory/SKUTable';

export default function InventoryManagementPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">SKU管理</h1>
        <Button asChild>
          <Link href="/admin/skus/create">
            创建SKU
          </Link>
        </Button>
      </div>

      <SKUTable />
    </div>
  );
}